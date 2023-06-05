import React, { useContext, useState } from 'react';
import GithubContext, { initState } from '@/context/GithubContext';
import Alert from './Alert';
import { StateTypes } from '@/types/context';
import UserResults  from './UsersResults';
import Loading from './Loading';

const GITHUB_URL = `${process.env.NEXT_PUBLIC_GITHUB_URL}`;

const UserSearch = () => {
    const [textInput, setTextInput] = useState<string>('');
    const {state, dispatch, fetchGithubData} = useContext(GithubContext);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTextInput = e.target.value;
        setTextInput(newTextInput);
        dispatch({
            type: StateTypes.FETCH_ERROR,
            payload: {
                ...state,
                error: ''
            }
        });
    };
    
    const hadnleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (state.users.length > 0){
            dispatch({
                type: StateTypes.SET_USERS,
                payload: {
                    ...state,
                    users: []
                }
            });
        }

        if (textInput === ''){

            dispatch({
                type: StateTypes.INPUT_ERROR,
                payload: {
                    ...state,
                }
            });
            
            setTimeout(() => {
                dispatch({
                    type: StateTypes.CLEAR_ERROR,
                    payload: {
                        ...state,
                    }
                });
            }, 3000);

        }else {
            const params = new URLSearchParams({
                q: textInput
            });
            const dataFetchingArgs = {
                url: GITHUB_URL,
                param: `/search/users?${params}`,
                action: true
            };
            
            fetchGithubData(dataFetchingArgs);

        }
    };

    const clearInputHandler = () => {
        
        dispatch({
                type: StateTypes.INIT,
                payload: initState
        });
        setTextInput('');

    };

    return (
        <div 
        className='grid grid-cols-1 gap-1 mx-8 xl:grid-cols-2 lg:grid-cols-2 md-grid-cols-2'
        >
            <div>
                <form onSubmit={hadnleSubmit}>
                    <div className='relative items-center col-span-2 col-start-1 py-2 mb-4 border-b border-indigo-400'>
                        <input
                            type='text'
                            className='w-full pr-40 text-black bg-gray-200 border-indigo-400 input input-slg'
                            placeholder='Search'
                            value={textInput}
                            onChange={handleChange}
                            />
                            <button
                            className='absolute right-0 text-white bg-indigo-400 border-indigo-500 rounded-l-none top-2 w-36 btn hover:bg-indigo-500 hover:border-none'
                            type='submit'
                            >
                                Go
                            </button>
                    </div>
                </form>
            </div>
            {
                state.isLoading ? (
                <div className='col-start-1 col-end-3 row-start-2 p-2 mb-0 bg-gray-700 border border-indigo-300 rounded-lg'>
                    <Loading />
                </div>
                ) :
                state.users.length > 0 && (
                <div className='col-start-1 col-end-3 row-start-2 p-2 mb-0 bg-gray-700 border border-indigo-300 rounded-lg'>
                    <div className='mb-1 border-b border-gray-800'>
                        <button
                        className=' btn btn-md btn-ghost'
                        onClick={clearInputHandler}
                        >
                            clear
                        </button>
                    </div>
                    <div className='overflow-y-scroll min-h-52 max-h-72'>
                        <UserResults users={state.users}/>
                    </div>
                </div>
            ) 
        }
        { (state.error.length > 0 && !state.isLoading) &&
            <div className='col-start-1 row-start-2 row-end-3'>
                <Alert type={state.error === 'Not Found' ? 'Error' : 'Warning'} message={state.error}></Alert>
            </div>
        }
        </div>
    );
};

export default UserSearch;

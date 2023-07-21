import React, { useContext, useState } from 'react';
import GithubContext, { initState } from '@/context/GithubContext';
import Alert from '../Alert';
import { StateTypes } from '@/types/context';
import Loading from '../Loading';
import SearchBar from './SearchBar';
import HowToUse from './HowToUse';
import ResultsWindow from './ResultsWindow';

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
                payload: {...state}
            });
            
            setTimeout(() => {
                dispatch({
                    type: StateTypes.CLEAR_ERROR,
                    payload: {...state}
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

    const handleClear = () => {
        
        dispatch({
                type: StateTypes.INIT,
                payload: initState
        });
        setTextInput('');

    };

    return (
        <div className='flex flex-col items-center justify-between lg:flex-row lg:items-start'>
           
            <div className='flex flex-col items-center justify-center w-full my-8 md:w-1/ lg:w-1/3 md:my-4'>
                <div className='w-full'>
                    <form onSubmit={hadnleSubmit}>
                        <SearchBar textInput={textInput} handleChange={handleChange} />
                    </form>
                </div>
                {
                state.isLoading ?
                <Loading /> :
                state.users.length > 0 && <ResultsWindow handleClear={handleClear} users={state.users} />
                }
                {
                (state.error.length > 0 && !state.isLoading) &&
                <Alert type={state.error === 'Not Found' ? 'Error' : 'Warning'} message={state.error}></Alert>
                }
            </div>

            <HowToUse />

        </div>
    );
};


export default UserSearch;

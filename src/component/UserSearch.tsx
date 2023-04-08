import useGithubFetch from '@/hooks/useGithubFetch';
import React, { useReducer, useContext, useEffect, useState } from 'react';
import GithubContext from '@/context/GithubContext';
import { GithubUserType } from './UsersResults';
import Alert from './Alert';
import { StateTypes, initState } from '@/context/GithubContext';
// interface State {
//     textInput: string;
//     error: string;
//     isLoading: boolean;
//     user: GithubUserType | null;
// }

// enum StateTypes {
//     INPUT_ERROR = 'INPUT_ERROR',
//     INIT = 'INIT',
//     FETCH_ERROR = 'FETCH_ERROR',
//     SET_TEXT_INPUT = 'SET_TEXT_INPUT',
//     SET_USERS = 'SET_USERS'
// }

// interface StateAction{
//     type: StateTypes;
//     payload: State;
// }

// const reducer = (state: State , action: StateAction) => {
//     const {payload, type} = action;

//     switch(type){
//         case 'INIT':
//             return payload;
//         case 'INPUT_ERROR':
//             return {...state, error: 'Please Write Somthing'};
//         case 'FETCH_ERROR':
//             return {...state, error: payload.error};
//         case 'SET_TEXT_INPUT':
//             return {...state, textInput: payload.textInput};
//         case 'SET_USERS':
//             return {...state, users: payload.user}
//         default:
//             return state;
//     }
// };

const GITHUB_URL = `${process.env.NEXT_PUBLIC_GITHUB_URL}`;

const UserSearch = () => {
    // const initState: State= {
    //     textInput: '',
    //     error: '',
    //     user: null,
    //     isLoading: false
    // };
    const [textInput, setTextInput] = useState<string>('');
    const {state, dispatch, fetchUsers} = useContext(GithubContext);
    // const [state, dispatch] = useReducer(reducer, initState);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTextInput = e.target.value;
        // if(newTextInput.length > 0){
            setTextInput(newTextInput);
            dispatch({
                type: StateTypes.FETCH_ERROR,
                payload: {
                    ...state,
                    error: ''
                }
            });
        // }else{
        //     clearInputHandler();
        // }
    };
    
    const hadnleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (textInput === ''){
            dispatch({
                type: StateTypes.INPUT_ERROR,
                payload: {
                    ...state,
                    error: 'Please Write Somthing'
                }
            });
        }else {
            const dataFetchingArgs = {
                url: GITHUB_URL,
                param: `/users/${textInput}`,
                action: false
            };
            
            fetchUsers(dataFetchingArgs);
            // console.log ('error', state.error)
            // if (error.length > 0){
            //     dispatch({
            //         type: StateTypes.FETCH_ERROR,
            //         payload: {
            //             ...state,
            //             error: error
            //         }
            //     });
            // }else{
            //     dispatch({
            //         type: StateTypes.SET_USERS,
            //         payload: {
            //             ...state,
            //             user: user
            //         }
            //     });
            // }

        }
    };
    console.log (state)

    const clearInputHandler = () => {
        
        if (textInput !== '' || state.error !== ''){
            dispatch({
                    type: StateTypes.INIT,
                    payload: initState
            });
            setTextInput('');

        }
    };

    // console.log (state);

    if (state.isLoading){
        return (<>
            <h2>Loading ...</h2>
        </>)
    }else{
        return (
          <div 
          className='grid grid-cols-1 gap-8 mb-8 xl:grid-cols-2 lg:grid-cols-2 md-grid-cols-2'
          >
              <div>
                  <form onSubmit={hadnleSubmit}>
                      <div className='relative items-center py-2 border-b border-indigo-400'>
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
              <div className='py-2'>
                  <button
                  className='btn btn-md btn-ghost'
                  onClick={clearInputHandler}
                  >
                      clear
                  </button>
              </div>
              {/* {state.user && (
              )
              } */}
              <div>
                { state.error.length > 0 &&
                    <Alert type={'Error'} message={state.error}></Alert>
                }
              </div>
          </div>
        );
    }
};

export default UserSearch;

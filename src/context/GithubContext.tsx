import React, { createContext, useReducer } from 'react';
import reducer from './GithubReducer';
import {FecthUsersTypes, GithubContextType, State, StateTypes} from '@/types/context'


const GithubContext = createContext<GithubContextType>({
  state: {
    users: [],
    error: '',
    user: null,
    isLoading: false,
  },
  dispatch: () => {},
  fetchUsers: ({ url, param, action }: FecthUsersTypes) => Promise.resolve()
});

export const initState: State = {
  error: '',
  user: null,
  users: [],
  isLoading: false
};

const setAndClearFetchError = (state: State, dispatch: React.Dispatch<any>, error: string) => {

  dispatch({
    type: StateTypes.FETCH_ERROR,
    payload: {
      ...state,
      error: error,
      isLoading: false,
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
};

export const GithubProvider  = ({children}: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initState);


  const fetchUsers = async ({url, param, action}: {url: string, param: string, action: boolean}) => {

    dispatch({
      type: StateTypes.SET_LOADING,
      payload: {
        ...state,
        isLoading: true,
      }
    });

    try {
    
      const response = await fetch(`${url}${param}`, {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
        }
      });
    
      if (response.status === 404){
        setAndClearFetchError(state, dispatch, 'Not Found');

      }else {
        if (action){

          const {items} = await response.json();
          
          if (items.length > 0){
            dispatch({
              type: StateTypes.SET_USERS,
              payload: {
                ...state,
                users: items,
                error: '',
                isLoading: false
              }
            });

          }else{
          
            setAndClearFetchError(state, dispatch, 'Not Found');
          }

        }else{

          const user = await response.json();
          dispatch({
            type: StateTypes.SET_USER,
            payload: {
              ...state,
              user,
              error: '',
              isLoading: false
            }
          });
        }
      }

    } catch(error: unknown) {
      if (error instanceof Error){
        setAndClearFetchError(state, dispatch, error.message);
      }else{
        setAndClearFetchError(state, dispatch, 'An unknown error occurred.');
      }
    }
  };


  return (
    <GithubContext.Provider
    value={{
      state,
      dispatch,
      fetchUsers
    }}
    >
      {children}
    </GithubContext.Provider>
  )
};

export default GithubContext;

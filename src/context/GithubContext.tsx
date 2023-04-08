import React, { createContext, useReducer } from 'react';
import reducer from './GithubReducer';
import {fecthUsersTypes, GithubContextType, State, StateTypes} from '@/types/context'


const GithubContext = createContext<GithubContextType>({
  state: {
    users: [],
    error: '',
    user: null,
    isLoading: false,
  },
  dispatch: () => {},
  fetchUsers: ({ url, param, action }: fecthUsersTypes) => Promise.resolve()
});

export const initState: State = {
  error: '',
  user: null,
  users: [],
  isLoading: false
};

export const GithubProvider  = ({children}: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const fetchUsers = async ({url, param, action}: {url: string, param: string, action: boolean}) => {

    dispatch({
      type: StateTypes.SET_LOADING,
      payload: {
        ...state,
        isLoading: false,
      }
    });
    
    const response = await fetch(`${url}${param}`, {
      headers: {
        Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
      }
    });
    if (response.status === 404){
      
      dispatch({
        type: StateTypes.FETCH_ERROR,
        payload: {
          ...state,
          error: 'Not Found',
          isLoading: false,
        }
      });
      setTimeout(() => {
        dispatch({
          type: StateTypes.FETCH_ERROR,
          payload: {
            ...state,
            error: '',
          }
        });
      }, 3000);

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
          dispatch({
            type: StateTypes.FETCH_ERROR,
            payload: {
              ...state,
              error: 'Not Found',
              isLoading: false
            }
          });
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

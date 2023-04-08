import React, { createContext, useState, useReducer } from 'react';
import {GithubUserType} from '@/component/UsersResults';

interface fecthUsersTypes {
  url: string;
  param: string;
  action: boolean;
};

interface GithubContextType {
  state: State;
  dispatch: React.Dispatch<StateAction>;
  fetchUsers: ({url, param, action} : fecthUsersTypes) => Promise<void>;
};

interface State {
  users: GithubUserType[];
  error: string;
  isLoading: boolean;
  user: GithubUserType | null;
}

export enum StateTypes {
  INIT = 'INIT',
  INPUT_ERROR = 'INPUT_ERROR',
  FETCH_ERROR = 'FETCH_ERROR',
  SET_USERS = 'SET_USERS',
  SET_USER = 'SET_USER',
  SET_LOADING = 'SET_LOADING'
}

interface StateAction{
  type: StateTypes;
  payload: State;
}

const reducer = (state: State , action: StateAction) => {
  const {payload, type} = action;

  switch(type){
      case 'INIT':
          return payload;
      case 'INPUT_ERROR':
          return {
            ...state,
            error: 'Please Write Somthing'
          };
      case 'FETCH_ERROR':
          return {
            ...state,
            error: payload.error,
            isLoading: payload.isLoading
          };
      case 'SET_USERS':
          return {
            ...state,
            ...payload
          }
      case 'SET_USER':
          return {
            ...state,
            ...payload
          }
      case 'SET_LOADING':
          return {
            ...state,
            isLoading: payload.isLoading
          }
      default:
          return state;
  }
};



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
        const users = await response.json();
        dispatch({
          type: StateTypes.SET_USERS,
          payload: {
            ...state,
            users,
            error: '',
            isLoading: false
          }
        });
      }else{
        const user = await response.json();
        dispatch({
          type: StateTypes.SET_USERS,
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

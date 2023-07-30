import React, { createContext, useReducer, useCallback } from 'react';
import reducer from './GithubReducer';
import {FecthUsersTypes, UserReposTypes, GithubContextType, State, StateTypes} from '@/types/context'
import { GithubUserType } from '@/types/user';
import { useRouter } from 'next/router';

export const initState: State = {
  error: '',
  user: null,
  users: [],
  repos: [],
  isLoading: false
};

const GithubContext = createContext<GithubContextType>({
  state: initState,
  dispatch: () => {},
  fetchGithubData: async () => {},
  userRepos: async () => {}
});


export const GithubProvider  = ({children}: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const router = useRouter();

  const setAndClearFetchError = useCallback((error: string) => {
    dispatch({
      type: StateTypes.FETCH_ERROR,
      payload: {
        ...state,
        error: error,
        isLoading: false,
      },
    });

    setTimeout(() => {
      dispatch({
        type: StateTypes.CLEAR_ERROR,
        payload: {
          ...state,
        },
      });
    }, 3000);
  }, [state]);


  
  const fetchGithubData = useCallback(async ({url, param, action}: {url: string, param: string, action: boolean}) => {

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
        setAndClearFetchError('Not Found');
        
        if (!action){
          router.push('/404');
        }
        
      }else {
        if (action){

          const { items } = await response.json();
          
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
            setAndClearFetchError('Not Found');
          }

        }else{

          const user = await response.json();

          dispatch({
            type: StateTypes.SET_USER,
            payload: {
              ...state,
              user,
              error: '',
            }
          });
        }
      }

    } catch(error: unknown) {
      if (error instanceof Error){
        setAndClearFetchError(error.message);
      }else{
        setAndClearFetchError('An unknown error occurred.');
      }
    }
  }, [router, state, setAndClearFetchError]);


  // User Repos
  const userRepos = useCallback(async ({login, param, url}: UserReposTypes) => {

    try {

      const response = await fetch(`${url}/users/${login}/${param}?sort=updated`, {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
        }
      });


      if (response.status === 404){
        setAndClearFetchError('Not Found');
        
      }else {
        const repos  = await response.json();


        if (repos.length > 0){
          dispatch({
            type: StateTypes.SET_REPOS,
            payload: {
              ...state,
              repos,
              error: '',
              isLoading: false
            }
          });
        }else{
          setAndClearFetchError('Not Found');
        }

      }
    } catch (error: unknown) {
      if (error instanceof Error){
        setAndClearFetchError(error.message);
      }else{
        setAndClearFetchError('An unknown error occurred.');
      }
    }

  }, [state, setAndClearFetchError]);

  return (
    <GithubContext.Provider
    value={{
      state,
      dispatch,
      fetchGithubData,
      userRepos
    }}
    >
      {children}
    </GithubContext.Provider>
  )
};

export default GithubContext;

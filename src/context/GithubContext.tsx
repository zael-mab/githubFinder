import React, { createContext, useReducer } from 'react';
import reducer from './GithubReducer';
import { GithubContextType, State, StateTypes} from '@/types/context'
import { useRouter } from 'next/router';
import github from './Github';

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
  getUserAndRepos: async () => {}
});


export const GithubProvider  = ({children}: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  const router = useRouter();

  const setAndClearFetchError = (error: string) => {
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
  };


  
  const fetchGithubData = async ({param}: {param: string}) => {

    dispatch({
      type: StateTypes.SET_LOADING,
      payload: {
        ...state,
        isLoading: true,
      }
    });

    try {
    
      const response = await github.get(param);
      const { items } = await response.data;
      
      if (items.length > 0){
        dispatch({
          type: StateTypes.SET_USERS,
          payload: {...state,
            users: items,
            error: '',
            isLoading: false
          }
        });
      }else{
        setAndClearFetchError('Not Found');
      }

    } catch(error: unknown) {
      if (error instanceof Error){
        setAndClearFetchError(error.message);
      }else{
        setAndClearFetchError('An unknown error occurred.');
      }
    }
  };


  const getUserAndRepos = async ({login}: {login: string}) => {

    dispatch({
      type: StateTypes.SET_LOADING,
      payload: {
        ...state,
        isLoading: true,
      }
    });

    try{
      const [user, repos] = await Promise.all([
        github.get(`/users/${login}`),
        github.get(`/users/${login}/repos?sort=updated`)
      ]);
  
      dispatch({
        type: StateTypes.SET_USER_AND_REPOS,
        payload: {
          ...state,
          user: user.data,
          repos: repos.data,
          error: '',
          isLoading: false
        }
      });
    } catch(error) {
      setAndClearFetchError('Not Found');
      router.push('/404');
    }
  };

  return (
    <GithubContext.Provider
    value={{
      state,
      dispatch,
      fetchGithubData,
      getUserAndRepos
    }}
    >
      {children}
    </GithubContext.Provider>
  )
};

export default GithubContext;

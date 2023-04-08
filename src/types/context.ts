import { GithubUserType } from './user';

export interface fecthUsersTypes {
    url: string;
    param: string;
    action: boolean;
  };
  
  export interface GithubContextType {
    state: State;
    dispatch: React.Dispatch<StateAction>;
    fetchUsers: ({url, param, action} : fecthUsersTypes) => Promise<void>;
  };
  
  export interface State {
    users: GithubUserType[];
    error: string;
    isLoading: boolean;
    user: GithubUserType | null;
  };
  
  export enum StateTypes {
    INIT = 'INIT',
    INPUT_ERROR = 'INPUT_ERROR',
    FETCH_ERROR = 'FETCH_ERROR',
    SET_USERS = 'SET_USERS',
    SET_USER = 'SET_USER',
    SET_LOADING = 'SET_LOADING'
  };
  
  export interface StateAction{
    type: StateTypes;
    payload: State;
  };
  
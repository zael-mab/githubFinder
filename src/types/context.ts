import { GithubUserType } from './user';

export interface FecthUsersTypes {
  url: string;
  param: string;
  action: boolean;
};

export interface UserReposTypes {
  login: string;
  url: string;
  param: string;
}
  
export interface GithubContextType {
  state: State;
  dispatch: React.Dispatch<StateAction>;
  fetchGithubData: ({url, param, action} : FecthUsersTypes) => Promise<void>;
  userRepos: ({login, param, url}: UserReposTypes) => Promise<void>;
};

export interface State {
  users: GithubUserType[];
  repos: [],
  error: string;
  isLoading: boolean;
  user: GithubUserType | null;
};
  
export enum StateTypes {
  INIT = 'INIT',
  CLEAR_ERROR = 'CLEAR_ERROR',
  INPUT_ERROR = 'INPUT_ERROR',
  FETCH_ERROR = 'FETCH_ERROR',
  SET_USERS = 'SET_USERS',
  SET_USER = 'SET_USER',
  SET_LOADING = 'SET_LOADING',
  SET_REPOS = 'SET_REPOS'
};

export interface StateAction{
  type: StateTypes;
  payload: State;
};
  
import { GithubUserType } from './user';
  
export interface GithubContextType {
  state: State;
  dispatch: React.Dispatch<StateAction>;
  fetchGithubData: ({ param } : { param: string; }) => Promise<void>;
  getUserAndRepos: ({ login }: { login: string }) => void;
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
  SET_USER_AND_REPOS = 'SET_USER_AND_REPOS',
  SET_LOADING = 'SET_LOADING',
};

export interface StateAction{
  type: StateTypes;
  payload: State;
};
  
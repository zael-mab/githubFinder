import {State, StateAction} from './GithubContext';

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

export default reducer;
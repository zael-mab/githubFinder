import {State, StateAction} from '../types/context';

const reducer = (state: State , action: StateAction) => {
    const {payload, type} = action;
  
    switch(type){
        case 'INIT':
            return payload;
        case 'CLEAR_ERROR':
            return {
              ...state,
              error: ''
            };
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
        case 'SET_USER_AND_REPOS':
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
import React, { useReducer, useState } from 'react';

interface State {
    textInput: string ;
    error: string;
}

enum StateTypes {
    INPUT_ERROR = 'INPUT_ERROR',
    INIT = 'INIT',
    FETCH_ERROR = 'FETCH_ERROR',
    SET_TEXT_INPUT = 'SET_TEXT_INPUT'
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
            return {...state, error: 'Please Write Somthing'};
        case 'FETCH_ERROR':
            return {...state, error: 'Server Error Please Try Later'};
        case 'SET_TEXT_INPUT':
            return {...state, textInput: payload.textInput};
        default:
            return state;
    }
}

const UserSearch = () => {

    const initState: State= {
        textInput: '',
        error: ''
    };
    const [state, dispatch] = useReducer(reducer, initState);
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: StateTypes.SET_TEXT_INPUT,
            payload: {
                textInput: e.target.value,
                error: ''
            }
        });
    };

    const hadnleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (state.textInput === ''){
            dispatch({
                type: StateTypes.INPUT_ERROR,
                payload: {
                    ...state,
                    error: 'Please Write Somthing'
                }
            });
        }
    };

    const clearInputHandler = () => {
        
        if (state.textInput !== '' || state.error !== ''){
            dispatch({
                    type: StateTypes.INIT,
                    payload: initState
            });

        }
    };

    console.log (state);


  return (
    <div 
    className='grid grid-cols-1 xl:grid-cols-1 lg:grid-cols-2 md-grid-cols-2 mb-8 gap-8'
    >
        <div>
            <form onSubmit={hadnleSubmit}>
                <div className='relative items-center border-b border-indigo-400 py-2'>
                    <input
                        type='text'
                        className='w-full pr-40 bg-gray-200 input input-slg text-black border-indigo-400'
                        placeholder='Search'
                        value={state.textInput}
                        onChange={handleChange}
                        />
                        <button
                        className='absolute top-2 right-0 rounded-l-none w-36 btn bg-indigo-400 text-white  hover:bg-indigo-500 hover:border-none border-indigo-500'
                        type='submit'
                        >
                            Go
                        </button>
                </div>
            </form>
        </div>
        <div className='py-2'>
            <button
            className='btn btn-md btn-ghost'
            onClick={clearInputHandler}
            >
                clear
            </button>
        </div>
    </div>
  )
};

export default UserSearch;

import React from 'react';
import UserResults  from './UsersResults';
import { GithubUserType } from '@/types/user';

const ResultsWindow = ({handleClear, users}: {handleClear: () => void, users: GithubUserType[]}) => {
    return (
        <div className='w-full p-2 mb-0 bg-gray-700 border border-indigo-300 rounded-lg'>
            <div className='mb-1 border-b border-gray-800'>
                <div className='flex items-center mx-2 mb-2'>
                    <button
                    className='text-center transition duration-300 ease-in-out btn btn-md btn-ghost hover:border-indigo-400 hover:text-indigo-300 bg-slate-200 bg-opacity-10 hover:bg-opacity-0'
                    onClick={handleClear}
                    >
                        clear
                    </button>
                </div>
            </div>
            <div className='min-h-full overflow-y-scroll lg:max-h-[30rem] max-h-64'>
                <UserResults users={users}/>
            </div>
        </div>
    );
};

export default ResultsWindow;
import React, { useContext } from 'react';
import GithubContext from '@/context/GithubContext';
import RepoCard from './RepoCard';

const Repos = () => {
    const { state } = useContext(GithubContext);
  
    return (
      <div className='mt-8 lg:mt-12 md:mt-10'>
        <div className='w-full px-40 py-[1px] bg-indigo-400 mb-4'></div>
        <h1 className='mb-4 text-2xl font-bold text-center lg:text-left'>
          Repositories:
        </h1>
        
        <div className='flex flex-col items-end justify-center w-full h-full mt-2'>
            {state.repos.length === 0 && (
                <div className='flex items-center justify-center w-full h-full px-6 py-4 mb-4 text-white bg-gray-800 rounded-lg'>
                  <p className='text-lg text-gray-300'>No Repositories</p>
                </div>
            )}
            {state.repos.map((repo: any) => (
              <RepoCard repo={repo} key={repo.id} />
            ))}
        </div>
      </div>
    );
};

export default Repos;
import React, { useContext } from 'react';
import GithubContext from '@/context/GithubContext';
import RepoCard from './RepoCard';
import { AiOutlineArrowUp } from 'react-icons/ai'

const Repos = () => {
    const { state } = useContext(GithubContext);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    return (
      <div className='mt-8 lg:mt-12 md:mt-10'>
        <div className='w-full px-40 py-[1px] bg-indigo-400 mb-4'></div>
        <h1 className='mb-4 text-2xl font-bold '>
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
        <div className=''>
          <div className='w-full px-40 py-[1px] bg-indigo-400 mt-4'></div>
          <div className='flex items-center justify-center w-full'>
            <button
            className='flex items-center justify-center px-4 py-2 mt-4 text-indigo-200 transition-all duration-100 ease-in border border-indigo-200 rounded-lg shadow hover:bg-indigo-200 hover:text-gray-800'
            onClick={scrollToTop}
            >
              <AiOutlineArrowUp />
            </button>
          </div>
        </div>
      </div>
    );
};

export default Repos;
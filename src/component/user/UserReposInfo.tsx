import { useContext, useState } from 'react';
import UserInfo from '@/component/user/UserInfo';
import Repos from '@/component/repos/Repos';
import { GoRepo } from 'react-icons/go';
import GithubContext from '@/context/GithubContext';

const UserReposInfo = () => {
    const [showRepos, setShowRepos] = useState(false);
    const { state } = useContext(GithubContext);
    const publicReposCount = state.user?.public_repos || 0;
    
    return (
    <div className='flex flex-col w-full px-2 pt-8 mt-4 lg:my-0 lg:px-8 lg:mx-8'>
      <UserInfo />
      {publicReposCount > 0 && (
      <div className='mt-8'>
        <button
        className='flex items-center justify-center px-4 py-2 mt-4 text-indigo-200 transition-all duration-100 ease-in border border-indigo-200 rounded-lg shadow hover:bg-indigo-200 hover:text-gray-800'
        onClick={() => setShowRepos(!showRepos)}
        >
          <GoRepo className='mr-2' />
          {showRepos ? 'Hide Repos' : 'Show Repos'}
        </button>
      </div>
      )}
      {showRepos && publicReposCount > 0 && <Repos />}
    </div>
    );
};

export default UserReposInfo;
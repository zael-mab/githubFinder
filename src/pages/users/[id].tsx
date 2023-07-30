import { useContext, useEffect, useState } from 'react';
import GithubContext from '@/context/GithubContext';
import { useRouter } from 'next/router';
import Layout from '@/component/Layout';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import ProgressBar from '@/component/ProgressBar';
import AvatarCard from '@/component/user/AvatarCard';
import UserInfo from '@/component/user/UserInfo';
import Repos from '@/component/repos/Repos';
import { GoRepo } from 'react-icons/go'


const GITHUB_URL = `${process.env.NEXT_PUBLIC_GITHUB_URL}`;


const GobackButton = () => {
  return (
    <div className='flex justify-center lg:justify-start'>
        <Link
        className='flex items-center justify-start px-4 py-2 mb-4 text-indigo-200 transition-all duration-100 ease-in border border-indigo-200 rounded-lg shadow hover:bg-indigo-200 hover:text-gray-800'
        href='/'>
          <MdArrowBack className='mr-2 text-xl' />
          Back To Search
        </Link>
    </div>
  );
};




const User = () => {
  const {state, fetchGithubData, userRepos} = useContext(GithubContext);
  const router = useRouter();
  const [user, setUser] = useState(state.user);
  const [showRepos, setShowRepos] = useState(false);
  const {id} = router.query;

  useEffect(() => {
    setUser(state.user);
  }, [state.user]);

  useEffect(() => {
    if (user && user.public_repos > 0){
      const userReposDataFetchingArgs = {
        login: user.login,
        url: GITHUB_URL,
        param: 'repos'
      }
      userRepos(userReposDataFetchingArgs);
    }
  }, [user]);


  useEffect(() => {
    if (id){
      const dataFetchingArgs = {
          url: GITHUB_URL,
          param: `/users/${id}`,
          action: false
      };
      fetchGithubData(dataFetchingArgs);
    }
  }, [id]);
  
  
  if (state.isLoading || !user){
    return (
      <Layout title={`Loading - Github Finder`}>
        <ProgressBar />
      </Layout>
    );
  }

  
  return (
    <Layout title={`${user.login} - Github Finder`}>
      <div>
        <GobackButton />
        
        <div className='flex flex-col items-center w-full h-full py-2 my-4 lg:items-start lg:flex-row'>
          
          <AvatarCard user={user} />

          <div className='flex flex-col w-full px-2 py-8 my-4 lg:my-0 lg:px-8 lg:mx-8'>
            <UserInfo user={user} />
            {
              user.public_repos === 0 ?
              (<></>)
              : 
              (<div className='mt-8'>
                <button
                className='flex items-center justify-center px-4 py-2 mt-4 text-indigo-200 transition-all duration-100 ease-in border border-indigo-200 rounded-lg shadow hover:bg-indigo-200 hover:text-gray-800'
                onClick={() => setShowRepos(showRepos => !showRepos)}
                >
                  <GoRepo className='mr-2' />
                  {showRepos ? 'Hide Repos' : 'Show Repos'}
                </button>
              </div>)
            }
            {
              (showRepos && user.public_repos > 0) && <Repos />
            }
          </div>
          
        </div>
      </div>
    </Layout>
  )
};

export default User;

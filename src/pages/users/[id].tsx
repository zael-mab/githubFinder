import { useContext, useEffect } from 'react';
import GithubContext from '@/context/GithubContext';
import { useRouter } from 'next/router';
import Layout from '@/component/Layout';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import ProgressBar from '@/component/ProgressBar';
import AvatarCard from '@/component/user/AvatarCard';
import UserInfo from '@/component/user/UserInfo';

const GITHUB_URL = `${process.env.NEXT_PUBLIC_GITHUB_URL}`;

const User = () => {
  const {state, dispatch, fetchGithubData} = useContext(GithubContext);
  const router = useRouter();
  const {id} = router.query;
  const user = state.user;
  console.log ('id')
  console.log (id)


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
  
  console.log (state);
  
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
        <div className='flex justify-center lg:justify-start'>
          <Link
          className='flex items-center justify-start px-4 py-2 mb-4 text-indigo-200 transition-all duration-100 ease-in border border-indigo-200 rounded-lg shadow hover:bg-indigo-200 hover:text-gray-800'
          href='/'>
            <MdArrowBack className='mr-2 text-xl' />
            Back To Search
          </Link>
        </div>
        
        <div className='flex flex-col items-center w-full min-h-full md:flex-row'>
          <div className='flex flex-col items-center w-full h-full py-2 my-4 lg:items-start lg:flex-row'>
            <AvatarCard user={user} />
            <UserInfo user={user} />
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default User;

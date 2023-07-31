import { useContext, useEffect } from 'react';
import GithubContext from '@/context/GithubContext';
import { useRouter } from 'next/router';
import Layout from '@/component/Layout';
import ProgressBar from '@/component/ProgressBar';
import AvatarCard from '@/component/user/AvatarCard';
import UserReposInfo from '@/component/user/UserReposInfo';
import GobackButton from '@/component/GoBackBtn';

const User = () => {
  const { state, getUserAndRepos } = useContext(GithubContext);
  const router = useRouter();
  const userId = router.query.id;

  useEffect(() => {
    if (userId){
      const login = `${userId}`;
      getUserAndRepos({login});
    }
  }, [userId]);


  return (
    <Layout title={`${state.user?.login || 'User'} - Github Finder`}>
      {state.isLoading ? (
      <ProgressBar />
      ) : (
      <div>
        <div className='flex justify-center w-full md:justify-start'>
          <GobackButton content='Back To Search' />
        </div>
        <div className='flex flex-col items-center w-full h-full py-2 my-4 lg:items-start lg:flex-row'>
          <AvatarCard />
          <UserReposInfo />
        </div>
      </div>
      )}
    </Layout>
  )
};

export default User;

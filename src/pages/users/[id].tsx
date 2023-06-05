import useGithubFetch from '../../hooks/useGithubFetch';
import { useContext, useEffect } from 'react';
import GithubContext from '@/context/GithubContext';
import { useRouter } from 'next/router';
//
const GITHUB_URL = `${process.env.NEXT_PUBLIC_GITHUB_URL}`;

const User = () => {
  const {state, dispatch, fetchGithubData} = useContext(GithubContext);
  const router = useRouter();
  const {id} = router.query;
  console.log ('id')
  console.log (id)

  useEffect(() => {

    if (id){
      const dataFetchingArgs = {
          url: GITHUB_URL,
          // param: `/search/user?${id}`,
          param: `/users/${id}`,
          action: false
      };
      fetchGithubData(dataFetchingArgs);
    }

  }, [id]);
  
  console.log (state);
  // if (!state.user){

  // }
  
  return (
    <div className='text-gray-700 card bg-slate-200'>
      Hello there
    </div>
  )
};

export default User;

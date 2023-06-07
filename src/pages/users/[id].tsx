import useGithubFetch from '../../hooks/useGithubFetch';
import Image from 'next/image';
import { useContext, useEffect } from 'react';
import GithubContext from '@/context/GithubContext';
import { useRouter } from 'next/router';
import Loading from '@/component/Loading';
import { StateTypes } from '@/types/context';
import Layout from '@/component/Layout';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
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
          param: `/users/${id}`,
          action: false
      };
      fetchGithubData(dataFetchingArgs);
    }

  }, [id]);
  
  console.log (state);
  if (state.isLoading || !state.user){
    return (<>
      <div className='flex items-center justify-center h-screen'>
          <Loading />
      </div>
    </>);
  }
  
  return (
    <Layout title={`${state.user.login} - Github Finder`}>
      <div className=''>

        <div className='m-2 mb-10'>
          <div className='flex items-center justify-between w-3/5 px-4 py-3 bg-indigo-400 rounded-md md:w-1/4 hover:bg-indigo-500'>
            <MdArrowBack />
            <Link href={'/'} className='mx-1 text-sm uppercase'>
              Back To Search
            </Link>
          </div>
        </div>

        <div className="w-3/5 m-auto bg-indigo-400 shadow-xl md:m-0 card md:w-1/3 image-full hover:scale-105">
          <figure>
            <img src={state.user.avatar_url} alt={'profile'} />
          </figure>
          <div className="flex justify-end card-body">
            <h2 className="text-white card-title">{state.user.name}</h2>
            <div className="items-end card-actions">
              <div className='text-blue-100 '>{state.user.login}</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
};

export default User;

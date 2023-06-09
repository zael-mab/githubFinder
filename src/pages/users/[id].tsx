import { useContext, useEffect } from 'react';
import GithubContext from '@/context/GithubContext';
import { useRouter } from 'next/router';
import Layout from '@/component/Layout';
import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';
import Loading from '@/component/Loading';
import Image from 'next/image';

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
    return (<>
    <Layout title={`Loading - Github Finder`}>
      <div className='flex items-center justify-center '>
          <progress className="w-3/5 bg-indigo-400 border border-indigo-500 md:1/3 progress"></progress>
          {/* <Loading /> */}
      </div>
    </Layout>
    </>);
  }
  
  return (
    <Layout title={`${user.login} - Github Finder`}>
      <div className=''>

          {/* <div className='flex items-center justify-between w-3/6 px-4 py-3 m-2 mb-10 bg-indigo-400 rounded-md md:w-1/4 lg:w-1/6 hover:bg-indigo-500'> */}
        <Link href={'/'} className='flex items-center justify-around w-3/5 p-4 my-10 text-sm uppercase bg-indigo-400 rounded-md xl:w-2/12 hover:bg-indigo-500 sm:w-1/3 md:w-4/12'>
          <MdArrowBack />
          Back To Search
        </Link>
          {/* </div> */}


        {/* <div className="w-1/3 bg-white card image-full hover:scale-105 md:w-1/4 sm:w-3/5 before:opacity-0">
          <figure className=''>
            <img src={state.user.avatar_url}  alt={'profile'} className='w-full h-full' />
          </figure>
          <div className="flex justify-end card-body">
            <h2 className="text-sm text-white card-title">{state.user.name}</h2>
            <div className="items-end card-actions">
              <div className='text-blue-100 '>{state.user.login}</div>
            </div>
          </div>
        </div> */}
        <div className="grid grid-cols-1 mb-8 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 md:gap-8">
        
          <div className="mb-6 custom-card-image md:mb-0">
        
              <div className="rounded-lg shadow-xl card image-full">
                  <figure>
                      <img src={user.avatar_url} alt=""/>
                  </figure>
        
                  <div className="justify-end card-body ">
                      <h2 className="mb-0 card-title text-secondary-content">
                          {user.name}
                      </h2>
                      <p className="flex-grow-0 text-secondary-content">
                          {user.login}
                      </p>
                  </div>
        
              </div>
        
          </div>
        </div>

      </div>
    </Layout>
  )
};

export default User;

import React from 'react';
import Link from 'next/link';
import StatsCard from '@/component/user/StatsCard';
import { IoLocationSharp } from 'react-icons/io5';
import { FaTwitter } from 'react-icons/fa';
import { useContext } from 'react';
import GithubContext from '@/context/GithubContext';

const UserInfo = () => {
    const { state } = useContext(GithubContext);
    
    if (state.user === null)
        return <></>;
    
    const webSite = state.user.blog.startsWith('https://') ? state.user.blog : `https://${state.user.blog}`;
    return (
        <div className='flex flex-col w-full h-full bg-base-100'>
            <div className='flex flex-col items-start justify-start h-full mx-2 mb-4 md:items-center md:flex-row'>
                
                <div className='flex items-center justify-between mb-2'>
                    <h2 className='mr-4 text-xl font-semibold text-indigo-400 md:text-2xl md:mr-12'>
                        {state.user.name ? state.user.name : state.user.login}
                    </h2>
                    <div className='md:mx-4 badge badge-accent'>
                        {state.user.type}
                    </div>
                </div>
                
                {
                state.user.location &&
                <div className='flex items-center justify-center mb-2 md:mx-4 text-light'>
                    <IoLocationSharp className='text-base-300' />
                    <span className='mx-2 mt-1 text-lg'>{state.user.location}</span>
                </div>
                }

                {
                    state.user.twitter_username &&
                    <div className='flex items-center justify-between mb-1 md:mx-4'>
                        <FaTwitter  className='text-blue-500'/>
                        <span className='mx-2'>
                            {state.user.twitter_username}
                        </span>
                    </div>
                }

            </div>

            <div className='mx-2 mb-3 text-lg'>
                <p>{state.user.bio}</p>
            </div>

            {
            state.user.blog &&
            <div className='flex mb-4'>
                <div className='px-3 text-lg rounded-full md:mx-2 link text-cyan-500 hover:bg-slate-500 bg-slate-600'>
                    <Link
                    target='_blank' 
                    href={webSite}>
                        Website
                    </Link>
                </div>
            </div>
            }
       

            <StatsCard />
        </div>
  );
};

export default UserInfo;

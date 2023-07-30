import React from 'react';
import Link from 'next/link';
import StatsCard from '@/component/user/StatsCard';
import { GithubUserType } from '@/types/user';
import { IoLocationSharp } from 'react-icons/io5';
import { FaTwitter } from 'react-icons/fa';

const UserInfo = ({user}: {user: GithubUserType}) => {
    const webSite = user.blog.startsWith('https://') ? user.blog : `https://${user.blog}`;
    return (
        <div className='flex flex-col w-full h-full bg-base-100'>
            <div className='flex flex-col items-start justify-start h-full mx-2 mb-4 md:items-center md:flex-row'>
                
                <div className='flex items-center justify-between mb-2'>
                    <h2 className='mr-4 text-xl font-semibold text-indigo-400 md:text-2xl md:mr-12'>
                        {user.name ? user.name : user.login}
                    </h2>
                    <div className='md:mx-4 badge badge-accent'>
                        {user.type}
                    </div>
                </div>
                
                {
                user.location &&
                <div className='flex items-center justify-center mb-2 md:mx-4 text-light'>
                    <IoLocationSharp className='text-base-300' />
                    <span className='mx-2 mt-1 text-lg'>{user.location}</span>
                </div>
                }

                {
                    user.twitter_username &&
                    <div className='flex items-center justify-between mb-1 md:mx-4'>
                        <FaTwitter  className='text-blue-500'/>
                        <span className='mx-2'>
                            {user.twitter_username}
                        </span>
                    </div>
                }

            </div>

            <div className='mx-2 mb-3 text-lg'>
                <p>{user.bio}</p>
            </div>

            {
            user.blog &&
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
       

            <StatsCard user={user}/>
        </div>
  );
};

export default UserInfo;

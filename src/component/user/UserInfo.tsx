import React from 'react';
import Link from 'next/link';
import StatsCard from '@/component/user/StatsCard';
import { GithubUserType } from '@/types/user';
import { CiLocationOn } from 'react-icons/ci';

const UserInfo = ({user}: {user: GithubUserType}) => {
    return (
        <div className='flex flex-col w-full h-full px-2 py-8 my-4 bg-gray-700 rounded-lg shadow-lg md:my-0 md:px-8 md:mx-8 shadow-slate-900'>
            <div className='flex flex-col items-start justify-start h-full mx-2 mb-4 md:items-center md:flex-row'>
                
                <div className='flex items-center justify-between mb-2'>
                    <h2 className='mr-4 text-xl font-semibold text-indigo-400 md:text-2xl'>
                        {user.name}
                    </h2>
                    <div className='md:mx-2 badge badge-accent'>
                        {user.type}
                    </div>
                </div>
                
                {
                user.location &&
                <div className='flex items-center justify-center mb-2 md:mx-2'>
                    <CiLocationOn />
                    <span className='mt-1 ml-2 text-lg'>{user.location}</span>
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
                    <Link href={user.blog}>
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

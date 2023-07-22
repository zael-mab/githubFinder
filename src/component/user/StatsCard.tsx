import React, { ReactNode } from 'react';
import { GithubUserType } from '@/types/user';
import { FaUsers } from 'react-icons/fa';
import { BiGitRepoForked } from 'react-icons/bi';
import { HiUsers } from 'react-icons/hi';

const StatCard = ({children, stat, value}: {children: ReactNode, stat: string, value: number}) => {
    return (
        <div className='stat'>
            <div className='text-3xl text-indigo-400 stat-figure'>
                {children}
            </div>
            <div className='stat-title'>{stat}</div>
            <div className='text-xl stat-value'>{value}</div>
        </div>
    );
};

const StatsCard = ({ user }: { user: GithubUserType }) => {
    
    return (
        <div className='flex flex-col shadow stats md:flex-row'>
            <StatCard value={user.followers} stat={'followers'} >
                <FaUsers />
            </StatCard>
            <StatCard value={user.following} stat={'following'} >
                <HiUsers />
            </StatCard>
            <StatCard value={user.public_repos} stat={'Public Repos'} >
                <BiGitRepoForked />
            </StatCard>
        </div>
  );
};

export default StatsCard;

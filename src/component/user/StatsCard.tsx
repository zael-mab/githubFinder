import React, { ReactNode } from 'react';
import { FaUsers } from 'react-icons/fa';
import { BiGitRepoForked } from 'react-icons/bi';
import { useContext } from 'react';
import GithubContext from '@/context/GithubContext';import { HiUsers } from 'react-icons/hi';

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

const StatsCard = () => {
    const { state } = useContext(GithubContext);
  
    if (state.user === null)
      return <></>;
    
    return (
        <div className='flex flex-col bg-gray-800 rounded-lg shadow stats-vertical md:flex-row md:stats-horizontal'>
            <StatCard value={state.user.followers} stat={'followers'} >
                <FaUsers />
            </StatCard>
            <StatCard value={state.user.following} stat={'following'} >
                <HiUsers />
            </StatCard>
            <StatCard value={state.user.public_repos} stat={'Public Repos'} >
                <BiGitRepoForked />
            </StatCard>
        </div>
  );
};

export default StatsCard;

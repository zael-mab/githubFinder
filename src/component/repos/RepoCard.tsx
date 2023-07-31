import React from 'react';
import Link from 'next/link';
import { AiFillStar, AiOutlineEye, AiFillTool, AiOutlineLink } from 'react-icons/ai';
import { BiFork } from 'react-icons/bi';

const RepoCard = ({repo}: any) => {
    return (
    <div className='w-full'>
      <div className='px-6 py-4 mb-4 text-white bg-gray-800 rounded-lg'>
        
        <div className='flex mb-4'>
          <Link
          href={repo.html_url} target='_blank'
          className='flex items-center justify-center'
          >
            <AiOutlineLink className='mr-2 text-lg text-indigo-400' />
            <span className='text-xl font-bold'>
              {repo.name}
            </span>
          </Link>
        </div>
  
        <p className='text-sm text-gray-300'>{repo.description}</p>
          
        <div className='flex items-center mt-4 text-xs md:text-md'>
  
          <span className='mr-2 badge badge-secondary'>
            <AiFillStar />
            <div className='ml-1'>
              {repo.stargazers_count}
            </div>
          </span>

          <span className='mr-2 badge badge-warning'>
            <AiOutlineEye />
            <div className='ml-1'>
              {repo.watchers_count}
            </div>
          </span>
          
          {
            repo.language && (
              <span className='mr-2 badge badge-accent'>
                <AiFillTool />
                <div className='ml-1'>
                  {repo.language}
                </div>
              </span>
            )
          }
  
          <span className='mr-2 badge badge-info'>
            <BiFork />
            <div className='ml-1'>
              {repo.forks}
            </div>
          </span>
          
        </div>
  
      </div>
    </div>
    );  
};

export default RepoCard;
  
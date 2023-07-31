import Image from 'next/image';
import Link from 'next/link';
import { useContext } from 'react';
import GithubContext from '@/context/GithubContext';


const AvatarCard = () => {
  const { state } = useContext(GithubContext);
  
  if (state.user === null)
    return <></>;
  
  return (
    <div className='shadow-xl w-52 card lg:w-96 image-full'>
      <figure>
        <Image
        className='rounded-xl'
        src={state.user.avatar_url}
        alt={state.user.login}
        width={500}
        height={500}
        priority
        />
      </figure>

      <div className='absolute top-0 z-10 flex flex-col justify-between w-full h-full md:bottom-0 md:justify-end'>

        <div className='px-4 py-2 opacity-75'>
          <h2 className='mb-2 card-title'>{state.user.name}</h2>
          <p className=''>{state.user.login}</p>
        </div>
        
        <div className='flex justify-end mx-4 mb-4 text-sm card-actions'>
          <Link
          className='px-4 py-2 text-indigo-400 transition-all duration-100 ease-in border border-indigo-400 rounded-lg hover:bg-indigo-400 hover:text-gray-800'
          href={state.user.html_url}
          target='_blank'
          >
            View Profile
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AvatarCard;
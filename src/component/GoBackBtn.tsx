import Link from 'next/link';
import { MdArrowBack } from 'react-icons/md';

const GobackButton = ({ content }: {content: string}) => {
    return (
      <div className='flex justify-center mb-8 md:mb-4'>
          <Link
          className='flex items-center justify-start px-4 py-2 mb-4 text-indigo-200 transition-all duration-100 ease-in border border-indigo-200 rounded-lg shadow hover:bg-indigo-200 hover:text-gray-800'
          href='/'>
            <MdArrowBack className='mr-2 text-xl' />
            {content}
          </Link>
      </div>
    );
};

export default GobackButton;
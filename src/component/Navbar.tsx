import Link from 'next/link';
import Image from 'next/image';
import github from '../../public/icons/github.svg';

interface propTypes {
    title: string;
};

const Navbar = ({title}: propTypes) => {
    const isHome = title === '/';
    const isAbout = title === '/about';
    
    return (
    <div>
        <nav className='text-indigo-200 shadow-lg navbar bg-neutral'>
            <div className="container mx-auto ">
                <Image
                className='w-[2.8rem] h-[2.8rem]'
                src={github}
                alt='github logo'
                placeholder="blur"
                blurDataURL={'../../public/icons/github.svg'} />
                <Link href={'/'} className='text-sm font-bold text-white sm:text-lg'>
                    <span className='mx-4'>
                        Github Finder
                    </span>
                </Link>

                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end text-gray-200">
                        <Link
                        className={`btn btn-ghost md:btn-sm btn-xs rounded-btn hover:text-white ${isAbout && 'bg-slate-400 bg-opacity-10'}`}
                        href={'/about'}>
                            About
                        </Link>
                        <Link
                        className={`btn btn-ghost md:btn-sm btn-xs rounded-btn hover:text-white ${isHome && 'bg-slate-400 bg-opacity-10'}`}
                        href={'/'}>
                            Home
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;

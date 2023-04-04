import { GoMarkGithub } from 'react-icons/go'
import Link from 'next/link';
interface propTypes {
    title: string;
}

const Navbar = ({title}: propTypes) => {
  return (
    <div>
        <nav className='navbar mb-12 shadow-lg bg-neutral text-neutral-content text-indigo-200'>
            <div className="container mx-auto ">
                <div className="flex-none px-2 mx-2 text-white">
                    <GoMarkGithub className='inline pr-1 text-4xl'/>
                    <Link href={'/'} className='px-2 text-lg font-bold'>Github Finder</Link>
                </div>

                <div className="flex-1 px-2 mx-2">
                    <div className="flex justify-end">
                        <Link href={'/about'} className='btn btn-ghost btn-sm rounded-btn hover:text-white'>About</Link>
                        <Link href={'/'} className='btn btn-ghost btn-sm rounded-btn hover:text-white'>Home</Link>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
};

export default Navbar;

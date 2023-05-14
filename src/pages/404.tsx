import Link from 'next/link';
import Layout from '../component/Layout';
import { IoMdHome } from 'react-icons/io';

const notFoundPage = () => {
    return (
        <Layout>
            <div className='flex flex-col justify-center item-ceneter'>
                <h1 className='text-gray-500 text-5xl py-2 mx-auto'>Oops!</h1>
                <p className='text-gray-200 text-5xl py-2 mx-auto'>404 - Page not found</p>
                <Link
                href='/'
                className='btn item-center mx-auto mt-2 hover:text-white btn-lg bg-blue-200 hover:border-2 text-gray-900 text-center'
                >
                    <IoMdHome className='mr-2'/>
                    Go To Home
                </Link>
            </div>
        </Layout>
  )
};

export default notFoundPage;
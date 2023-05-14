import Link from 'next/link';
import Layout from '../component/Layout';

const about = () => {
  return (
    <div>
      <Layout>
        <div className='text-gray-200'>
            <h1 className="text-6xl mb-4">
                Github Finder
            </h1>
            <p className="mb-4 text-2xl font-light">
                A Next app to search Github profiles and see profile details.
                Created by 
                <Link
                href='https://github.com/zael-mab'
                className='px-2 mx-2 hover:bg-gray-500 rounded text-white-100 bg-gray-800'>
                    zael-mab
                </Link>
            </p>
            <p className='text-lg text-gray-400'>
                Verion <span className='text-white'>1.0.0</span>
            </p>
        </div>
      </Layout>
    </div>
  )
};

export default about;

import Layout from '../component/Layout';
import GobackButton from '@/component/GoBackBtn';

const notFoundPage = () => {
    return (
        <Layout>
            <div className='flex flex-col justify-center text-center item-ceneter'>
                <h1 className='mx-auto mb-8 text-5xl text-gray-500'>Oops!</h1>
                <p className='mx-auto mb-10 text-5xl text-gray-200'>404 - Page not found</p>
                <GobackButton content='Go Back Home' />
            </div>
        </Layout>
  )
};

export default notFoundPage;
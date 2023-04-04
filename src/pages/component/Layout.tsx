import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

interface propTypes {
  title: string | undefined,
  description: string | undefined,
  keywords: string | undefined,
  children: JSX.Element | undefined
};

const Layout = ({children, title, description, keywords}: propTypes) => {
  return (
    <div className={styles.layout}>
      <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name='keywords' content={keywords}/>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='flex flex-col justify-between min-h-screen text-white'>
          <Navbar title={'home'} />
          <main className='container mx-auto px-3 pb-12'>
            {children}
          </main>
          <Footer />
        </div>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Github Finder',
  description: 'github, github users',
  keywords: 'github github finder'
};

export default Layout;

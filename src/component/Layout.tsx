import Head from 'next/head';
import React from 'react';
import styles from '@/styles/Layout.module.css';
import Navbar from './Navbar';
import Footer from './Footer';

interface PropTypes {
  title: string | undefined,
  description: string | undefined,
  keywords: string | undefined,
  children: JSX.Element | undefined
};

const Layout = ({children, title, description, keywords}: PropTypes) => {
  return (
    <div className={styles.layout}>
      <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name='keywords' content={keywords}/>
          <meta name="author" content='zael-mab' />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className='flex flex-col justify-between min-h-screen text-white'>
          <Navbar title={'home'} />
          <main className='container px-3 pb-4 mx-auto'>
            {children}
          </main>
          <Footer />
        </div>
    </div>
  );
};

Layout.defaultProps = {
  title: 'Github Finder',
  description: 'GitHub Finder is a Next.js project that allows you to search for GitHub users and view their repositories.',
  keywords: 'GitHub Finder, Next.js, GitHub, search, repositories, user, development'
};

export default Layout;

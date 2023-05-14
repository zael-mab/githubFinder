import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import {GithubProvider} from '@/context/GithubContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GithubProvider>
      <Component {...pageProps} />
    </GithubProvider>
  )
};

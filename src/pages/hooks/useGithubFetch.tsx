import { useCallback } from 'react';
import useSWR from 'swr';

const useGithubFetch = (url: string) => {
    // wrapper of the native fetch
    const fetcher = useCallback((url: string) =>
      fetch(url, {
        headers: {
          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
        }
      }).then((res) => res.json()),
      []
    );
    
    const {
        data,
        error,
        isLoading
    }  = useSWR(url, fetcher);
    
    return {data, error, isLoading};
};

export default useGithubFetch;
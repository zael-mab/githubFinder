import { useCallback } from 'react';
import useSWR from 'swr';

const useGithubFetch = ({url, param}: {url: string, param: string}) => {
    // wrapper of the native fetch

    const fetcher = useCallback(({url, param}: {url: string, param: string}) =>
      fetch(`${url}${param}`, {
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
    }  = useSWR({url, param}, fetcher);
    
    return {data, error, isLoading};
};

export default useGithubFetch;
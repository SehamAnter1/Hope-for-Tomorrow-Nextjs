// utils/useSWRFetcher.js
import { baseURL } from '@/utilis/helpers';
import useSWR from 'swr';

// The fetcher function that SWR will use to fetch the data
const fetcher = (url) => fetch(url).then((res) => res.json());
console.log("fetcher",fetcher)
/**
 * SWR Helper function to fetch data with caching and revalidation
 */
export const useSWRFetcher = (url, options = {}) => {
  const { data, error } = useSWR(`${baseURL}${url}`, fetcher, options);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    error,
  };
};

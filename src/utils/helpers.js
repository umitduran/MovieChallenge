import {useEffect} from 'react';

export default function useDebounce(value, callback, delay) {
  useEffect(() => {
    const handler = setTimeout(() => {
      callback(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);
}

import { useEffect, useRef } from 'react';

export const useClickOutside = <T extends HTMLElement = any>(handler: () => void) => {
  const ref = useRef<T>();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref && ref.current && !ref.current.contains(e.target as Node)) handler();
    };
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('mousedown', handleClick);
    };
  }, [ref]);

  return ref;
};

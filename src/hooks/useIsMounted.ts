import { useEffect, useRef } from 'react';

const useIsMounted = (): { current: boolean } => {
  const componentIsMounted = useRef(true);
  useEffect(
    () => () => {
      componentIsMounted.current = false;
    },
    []
  );
  return componentIsMounted;
};

export default useIsMounted;

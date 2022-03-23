import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { authService } from '../services/auth';

const useCurrentUser = () => {
  const [isSignedIn, setIsSignedIn] = useState(authService.isSignedIn());
  const location = useLocation();

  useEffect(() => {
    setIsSignedIn(authService.isSignedIn());
  }, [location]);

  return { isSignedIn };
};

export default useCurrentUser;

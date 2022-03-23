import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import useCurrentUser from '../../../hooks/useCurrentUser';

interface Props {
  children: JSX.Element;
}

const RequireAuth: FC<Props> = ({ children }) => {
  let { isSignedIn } = useCurrentUser();

  if (!isSignedIn) return <Navigate to="/sign-in" replace />;

  return children;
};

export default RequireAuth;

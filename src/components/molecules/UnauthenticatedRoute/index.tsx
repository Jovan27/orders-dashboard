import { FC } from 'react';
import { Navigate } from 'react-router-dom';
import useCurrentUser from '../../../hooks/useCurrentUser';

interface Props {
  children: JSX.Element;
}

const UnauthenticatedRoute: FC<Props> = ({ children }) => {
  const { isSignedIn } = useCurrentUser();
  if (isSignedIn) return <Navigate to="/table" />;
  return children;
};

export default UnauthenticatedRoute;

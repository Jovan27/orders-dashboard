import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import useCurrentUser from '../../../hooks/useCurrentUser';
import { authService } from '../../../services/auth';
import Button from '../../atoms/Button';
import Logo from '../../atoms/Logo';
import './styles.scss';

interface Props {}

const Header: React.FC<Props> = ({}) => {
  const { isSignedIn } = useCurrentUser();

  return (
    <header className="header">
      <Link className="logo-link" to="/">
        <Logo />
      </Link>

      <nav className="nav">
        {isSignedIn ? (
          <>
            <NavLink className="nav__link" to="/table">
              Tables
            </NavLink>
            <NavLink className="nav__link" to="/charts">
              Charts
            </NavLink>
          </>
        ) : (
          <>
            <NavLink className="nav__link" to="/sign-in">
              Sign In
            </NavLink>
            <NavLink className="nav__link" to="/sign-up">
              Sign Up
            </NavLink>
          </>
        )}
      </nav>

      {isSignedIn && (
        <Button size="sm" onClick={authService.signOut}>
          Sign Out
        </Button>
      )}
    </header>
  );
};

export default Header;

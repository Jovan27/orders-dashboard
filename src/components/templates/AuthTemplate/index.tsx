import React from 'react';
import { Link } from 'react-router-dom';
import Paper from '../../atoms/Paper';
import CredentialsForm from '../../organisms/CredentialsForm';
// import Header from '../../organisms/Header';
import './style.scss';

interface Props {
  onSubmit: (email: string, password: string) => Promise<void>;
  title: string;
  helperText: string;
  helperLink: {
    to: string;
    text: string;
  };
  errorMessage?: string;
}

const AuthTemplate: React.FC<Props> = ({ onSubmit, title, helperText, helperLink, errorMessage }) => (
  <div className="auth-template">
    <Paper>
      <h1>{title}</h1>
      <CredentialsForm onSubmit={onSubmit} />
      {errorMessage && <p className="auth-template__error-message">{errorMessage}</p>}
      <p className="auth-template__helper-text">
        {helperText}
        <Link to={helperLink.to}>{helperLink.text}</Link>
      </p>
    </Paper>
  </div>
);

export default AuthTemplate;

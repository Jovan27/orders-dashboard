import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthTemplate from '../../components/templates/AuthTemplate';
import { authService } from '../../services/auth';
import isError from '../../utils/isError';

const SignIn: FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (email: string, password: string) => {
    setErrorMessage('');
    try {
      await authService.signIn(email, password);
      navigate('/table');
    } catch (e) {
      if (isError(e)) setErrorMessage(e.message);
      else setErrorMessage('Unknown error');
    }
  };

  return (
    <AuthTemplate
      onSubmit={handleSubmit}
      title="Sign In"
      helperText="Don't have an account?"
      helperLink={{ to: '/sign-up', text: 'Sign Up' }}
      errorMessage={errorMessage}
    />
  );
};

export default SignIn;

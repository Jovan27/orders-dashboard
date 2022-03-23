import { useState, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthTemplate from '../../components/templates/AuthTemplate';
import { authService } from '../../services/auth';
import isError from '../../utils/isError';

const SignUp: FC = () => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (email: string, password: string) => {
    setErrorMessage('');
    try {
      await authService.signUp(email, password);
      navigate('/table');
    } catch (e) {
      if (isError(e)) setErrorMessage(e.message);
      else setErrorMessage('Unknown error');
    }
  };

  return (
    <AuthTemplate
      onSubmit={handleSubmit}
      title="Sign Up"
      helperText="Already have an account?"
      helperLink={{ to: '/sign-in', text: 'Sign In' }}
      errorMessage={errorMessage}
    />
  );
};

export default SignUp;

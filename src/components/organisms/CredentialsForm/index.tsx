import React, { useState } from 'react';
import useIsMounted from '../../../hooks/useIsMounted';
import Button from '../../atoms/Button';
import LabeledInput from '../../molecules/LabeledInput';
import './style.scss';

interface Props {
  onSubmit: (username: string, password: string) => Promise<void>;
}

const CredentialsForm: React.FC<Props> = ({ onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const isMounted = useIsMounted();

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    await onSubmit(email, password);
    if (isMounted.current) setLoading(false);
  };

  return (
    <form className="credentials-form" onSubmit={handleFormSubmit}>
      <LabeledInput required label="Email" name="email" type="email" />
      <LabeledInput required label="Password" name="password" type="password" />
      <Button loading={loading} type="submit">
        Submit
      </Button>
    </form>
  );
};

export default CredentialsForm;

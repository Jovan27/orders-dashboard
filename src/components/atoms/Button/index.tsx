import React from 'react';
import Loader from '../Loader';
import './style.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  size?: 'md' | 'sm';
  variant?: 'text' | 'contained' | 'outlined';
}

const Button: React.FC<Props> = ({ loading, children, size = 'md', variant = 'contained', disabled, ...props }) => {
  return (
    <button className={`button button--${size} button--${variant}`} {...props} disabled={disabled || loading}>
      {loading ? <Loader /> : children}
    </button>
  );
};

export default Button;

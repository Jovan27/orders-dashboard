import React from 'react';
import './style.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<Props> = (props) => {
  return <input className="input" {...props} />;
};

export default Input;

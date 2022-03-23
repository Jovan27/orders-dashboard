import React from 'react';
import Loader from '../Loader';
import './style.scss';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

const IconButton: React.FC<Props> = ({ loading, children, ...props }) => {
  return (
    <button className="icon-button" {...props} disabled={loading}>
      {loading ? <Loader /> : children}
    </button>
  );
};

export default IconButton;

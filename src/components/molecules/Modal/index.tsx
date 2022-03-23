import React from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import Paper from '../../atoms/Paper';
import './style.scss';

interface Props {
  onClickOutside?: () => void;
}

const Modal: React.FC<Props> = ({ children, onClickOutside = () => {} }) => {
  const ref = useClickOutside(onClickOutside);

  return (
    <div className="modal">
      <Paper ref={ref} className="modal__content">
        {children}
      </Paper>
    </div>
  );
};

export default Modal;

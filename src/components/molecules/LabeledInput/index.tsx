import React from 'react';
import Input from '../../atoms/Input';
import './style.scss';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
}

const LabeledInput: React.FC<Props> = ({ label, labelProps, ...inputProps }) => {
  return (
    <div>
      <label {...labelProps}>{label}</label>
      <Input {...inputProps} />
    </div>
  );
};

export default LabeledInput;

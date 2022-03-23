import React, { useState } from 'react';
import { useClickOutside } from '../../../hooks/useClickOutside';
import Icon from '../Icon';
import './style.scss';

interface Option {
  value: string;
  text: string;
}

interface Props {
  value: string;
  options: Option[];
  onChange(value: string): void;
}

const Dropdown: React.FC<Props> = ({ value, options, onChange }) => {
  const [open, setOpen] = useState(false);

  const ref = useClickOutside(() => setOpen(false));

  const handleClick = (option: Option) => {
    onChange(option.value);
    setOpen(false);
  };

  return (
    <div className="dropdown" ref={ref}>
      <button type="button" className="dropdown__toggle" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        <span>{options.find((o) => o.value === value)?.text}</span>
        <Icon name="chevron" orientation={open ? 'up' : 'down'} className="dropdown__toggle__icon" />
      </button>
      <ul className="dropdown__menu" role="listbox">
        {options.map((option) => (
          <li
            className="dropdown__menu__option"
            role="option"
            aria-selected={false}
            key={option.value}
            onClick={() => handleClick(option)}
          >
            {option.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;

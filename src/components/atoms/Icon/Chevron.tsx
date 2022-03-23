import React from 'react';

const angles = {
  down: '0deg',
  left: '90deg',
  up: '180deg',
  right: '270deg',
};

interface Props extends React.SVGProps<SVGSVGElement> {
  orientation?: keyof typeof angles;
}

const Chevron: React.FC<Props> = ({ orientation = 'down', style, ...props }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      style={{ ...style, transform: `rotate(${angles[orientation]})` }}
    >
      <path
        d="M15.875 9.00002L11.995 12.88L8.11498 9.00002C7.72498 8.61002 7.09498 8.61002 6.70498 9.00002C6.31498 9.39002 6.31498 10.02 6.70498 10.41L11.295 15C11.685 15.39 12.315 15.39 12.705 15L17.295 10.41C17.685 10.02 17.685 9.39002 17.295 9.00002C16.905 8.62002 16.265 8.61002 15.875 9.00002Z"
        fill="white"
      />
    </svg>
  );
};

export default Chevron;

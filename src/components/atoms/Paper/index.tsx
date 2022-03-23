import clsx from 'clsx';
import React from 'react';
import './style.scss';

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Paper = React.forwardRef<HTMLDivElement, Props>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={clsx('paper', className)} {...props}>
      {children}
    </div>
  );
});

export default Paper;

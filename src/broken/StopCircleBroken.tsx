import React from 'react';
import { IconProps } from '../IconWrapper';

export const StopCircleBroken: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16.2295 13.27V10.73C16.2295 8.61002 15.3795 7.77002 13.2695 7.77002H10.7295C8.60953 7.77002 7.76953 8.62002 7.76953 10.73V13.27C7.76953 15.39 8.61953 16.23 10.7295 16.23H12.5095" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 6C2.75 7.67 2 9.75 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C10.57 2 9.2 2.3 7.97 2.85" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

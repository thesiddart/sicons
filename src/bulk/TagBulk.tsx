import React from 'react';
import { IconProps } from '../IconWrapper';

export const TagBulk: React.FC<IconProps> = ({
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
      <path opacity="0.4" d="M4.17038 15.3L8.70038 19.83C10.5604 21.69 13.5804 21.69 15.4504 19.83L19.8404 15.44C21.7004 13.58 21.7004 10.56 19.8404 8.69005L15.3004 4.17005C14.3504 3.22005 13.0404 2.71005 11.7004 2.78005L6.70038 3.02005C4.70038 3.11005 3.11038 4.70005 3.01038 6.69005L2.77038 11.69C2.71038 13.04 3.22038 14.35 4.17038 15.3Z" fill="currentColor"/>
<path d="M9.50012 12.3801C11.0907 12.3801 12.3801 11.0907 12.3801 9.50012C12.3801 7.90954 11.0907 6.62012 9.50012 6.62012C7.90954 6.62012 6.62012 7.90954 6.62012 9.50012C6.62012 11.0907 7.90954 12.3801 9.50012 12.3801Z" fill="currentColor"/>
    </svg>
  );
};

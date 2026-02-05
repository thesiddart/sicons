import React from 'react';
import { IconProps } from '../IconWrapper';

export const ToggleOnBulk: React.FC<IconProps> = ({
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
      <path opacity="0.4" d="M7.35 3.85986H16.65C20.75 3.85986 22 5.10986 22 9.20986V14.7899C22 18.8899 20.75 20.1399 16.65 20.1399H7.35C3.25 20.1399 2 18.8899 2 14.7899V9.20986C2 5.10986 3.25 3.85986 7.35 3.85986Z" fill="currentColor"/>
<path d="M13.2099 7.58008H15.4399C17.6899 7.58008 18.7399 8.63008 18.7399 10.8801V13.1101C18.7399 15.3601 17.6899 16.4101 15.4399 16.4101H13.2099C10.9599 16.4101 9.90991 15.3601 9.90991 13.1101V10.8801C9.90991 8.63008 10.9599 7.58008 13.2099 7.58008Z" fill="currentColor"/>
    </svg>
  );
};

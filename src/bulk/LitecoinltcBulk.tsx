import React from 'react';
import { IconProps } from '../IconWrapper';

export const LitecoinltcBulk: React.FC<IconProps> = ({
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
      <path opacity="0.4" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="currentColor"/>
<path d="M12.78 6.35986C13.44 6.35986 13.92 6.97986 13.75 7.61986L11.96 14.2999H14.99C15.61 14.2999 16.09 14.8599 15.97 15.4799L15.82 16.3199C15.73 16.7999 15.32 17.1399 14.84 17.1399H9.30001C8.64001 17.1399 8.16002 16.4999 8.34002 15.8699L10.95 6.72986C11.01 6.51986 11.21 6.36986 11.43 6.36986H12.78V6.35986Z" fill="currentColor"/>
<path d="M7.32002 13.27C6.97002 13.27 6.66001 13.02 6.59001 12.67C6.51001 12.26 6.77 11.87 7.18 11.79L14.88 10.25C15.28 10.17 15.68 10.43 15.76 10.84C15.84 11.25 15.58 11.64 15.17 11.72L7.47001 13.26C7.42001 13.27 7.37002 13.27 7.32002 13.27Z" fill="currentColor"/>
    </svg>
  );
};

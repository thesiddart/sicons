import React from 'react';
import { IconProps } from '../IconWrapper';

export const ArchiveMinusBulk: React.FC<IconProps> = ({
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
      <path opacity="0.4" d="M16.8201 2H7.18007C5.05007 2 3.32007 3.74 3.32007 5.86V19.95C3.32007 21.75 4.61007 22.51 6.19007 21.64L11.0701 18.93C11.5901 18.64 12.4301 18.64 12.9401 18.93L17.8201 21.64C19.4001 22.52 20.6901 21.76 20.6901 19.95V5.86C20.6801 3.74 18.9501 2 16.8201 2Z" fill="currentColor"/>
<path d="M14.5 11.3999H9.5C9.09 11.3999 8.75 11.0599 8.75 10.6499C8.75 10.2399 9.09 9.8999 9.5 9.8999H14.5C14.91 9.8999 15.25 10.2399 15.25 10.6499C15.25 11.0599 14.91 11.3999 14.5 11.3999Z" fill="currentColor"/>
    </svg>
  );
};

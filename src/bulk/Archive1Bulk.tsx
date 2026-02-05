import React from 'react';
import { IconProps } from '../IconWrapper';

export const Archive1Bulk: React.FC<IconProps> = ({
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
<path d="M12 10.2801C10.98 10.2801 9.96 10.1001 8.99 9.75005C8.6 9.61005 8.4 9.18005 8.54 8.79005C8.69 8.40005 9.12 8.20005 9.51 8.34005C11.12 8.92005 12.89 8.92005 14.5 8.34005C14.89 8.20005 15.32 8.40005 15.46 8.79005C15.6 9.18005 15.4 9.61005 15.01 9.75005C14.04 10.1001 13.02 10.2801 12 10.2801Z" fill="currentColor"/>
    </svg>
  );
};

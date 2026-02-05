import React from 'react';
import { IconProps } from '../IconWrapper';

export const ChartSquareBulk: React.FC<IconProps> = ({
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
      <path opacity="0.4" d="M16.1898 2H7.81976C4.17976 2 2.00977 4.17 2.00977 7.81V16.18C2.00977 19.82 4.17976 21.99 7.81976 21.99H16.1898C19.8298 21.99 21.9998 19.82 21.9998 16.18V7.81C21.9998 4.17 19.8298 2 16.1898 2Z" fill="currentColor"/>
<path d="M10.1103 11.1501H7.4603C6.8303 11.1501 6.32031 11.6601 6.32031 12.2901V17.4101H10.1103V11.1501V11.1501Z" fill="currentColor"/>
<path opacity="0.4" d="M12.7606 6.6001H11.2406C10.6106 6.6001 10.1006 7.11011 10.1006 7.74011V17.4001H13.8906V7.74011C13.8906 7.11011 13.3906 6.6001 12.7606 6.6001Z" fill="currentColor"/>
<path d="M16.5504 12.8501H13.9004V17.4001H17.6904V13.9901C17.6804 13.3601 17.1704 12.8501 16.5504 12.8501Z" fill="currentColor"/>
    </svg>
  );
};

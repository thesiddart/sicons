import React from 'react';
import { IconProps } from '../IconWrapper';

export const GooglePlayBulk: React.FC<IconProps> = ({
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
      <path opacity="0.4" d="M21.4 12.9498L16.89 15.2098L13.7 12.0198L16.92 8.7998L21.4 11.0498C22.19 11.4398 22.19 12.5598 21.4 12.9498Z" fill="currentColor"/>
<path d="M16.92 8.80009L13.7 12.0201L4.03003 2.3501L16.92 8.80009Z" fill="currentColor"/>
<path opacity="0.4" d="M13.7 12.0202L4.12 21.6003L3.55 21.8902C2.83 22.2402 2 21.7302 2 20.9302V3.07025C2 2.27025 2.83 1.76024 3.55 2.11024L4.03 2.35025L13.7 12.0202Z" fill="currentColor"/>
<path d="M16.8901 15.21L4.12012 21.6L13.7001 12.02L16.8901 15.21Z" fill="currentColor"/>
    </svg>
  );
};

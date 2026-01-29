import React from 'react';
import { IconProps } from '../IconWrapper';

export const AlignLeftBold: React.FC<IconProps> = ({
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
      <path d="M19.38 15.98V17.02C19.38 18.61 18.78 19.25 17.26 19.25H5.38V13.75H17.26C18.78 13.75 19.38 14.39 19.38 15.98Z" fill="currentColor"/>
<path d="M14.38 7.48V8.52C14.38 10.11 13.77 10.75 12.26 10.75H5.38V5.25H12.26C13.77 5.25 14.38 5.89 14.38 7.48Z" fill="currentColor"/>
<path d="M5.38 22C4.97 22 4.63 21.66 4.63 21.25V2.75C4.62 2.33 4.96 2 5.38 2C5.8 2 6.13 2.34 6.13 2.75V21.25C6.12 21.66 5.79 22 5.38 22Z" fill="currentColor"/>
    </svg>
  );
};

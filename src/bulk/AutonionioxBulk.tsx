import React from 'react';
import { IconProps } from '../IconWrapper';

export const AutonionioxBulk: React.FC<IconProps> = ({
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
<path d="M11.79 6.20984L9.65999 9.75984C9.55999 9.92984 9.68002 10.1398 9.87002 10.1398H14.13C14.32 10.1398 14.44 9.92984 14.34 9.75984L12.21 6.20984C12.12 6.04984 11.88 6.04984 11.79 6.20984Z" fill="currentColor"/>
<path d="M8.35994 12.2098L6.22994 15.7598C6.12994 15.9298 6.24996 16.1398 6.43996 16.1398H10.7C10.89 16.1398 11.0099 15.9298 10.9099 15.7598L8.77999 12.2098C8.68999 12.0498 8.44994 12.0498 8.35994 12.2098Z" fill="currentColor"/>
<path d="M15.2101 12.2098L13.08 15.7598C12.98 15.9298 13.1 16.1398 13.29 16.1398H17.55C17.74 16.1398 17.86 15.9298 17.76 15.7598L15.63 12.2098C15.55 12.0498 15.3101 12.0498 15.2101 12.2098Z" fill="currentColor"/>
    </svg>
  );
};

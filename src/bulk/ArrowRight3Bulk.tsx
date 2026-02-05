import React from 'react';
import { IconProps } from '../IconWrapper';

export const ArrowRight3Bulk: React.FC<IconProps> = ({
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
      <path opacity="0.4" d="M13.2302 8.52002L8.18018 12.31V17.92C8.18018 18.88 9.34018 19.36 10.0202 18.68L15.2002 13.5C16.0302 12.67 16.0302 11.32 15.2002 10.49L13.2302 8.52002Z" fill="currentColor"/>
<path d="M8.18018 6.07993V12.3099L13.2302 8.51993L10.0202 5.30993C9.34018 4.63993 8.18018 5.11993 8.18018 6.07993Z" fill="currentColor"/>
    </svg>
  );
};

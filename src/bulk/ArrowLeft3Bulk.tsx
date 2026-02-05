import React from 'react';
import { IconProps } from '../IconWrapper';

export const ArrowLeft3Bulk: React.FC<IconProps> = ({
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
      <path opacity="0.4" d="M10.7702 8.52002L15.8202 12.31V17.92C15.8202 18.88 14.6602 19.36 13.9802 18.68L8.80023 13.51C7.97023 12.68 7.97023 11.33 8.80023 10.5L10.7702 8.52002Z" fill="currentColor"/>
<path d="M15.82 6.07993V12.3099L10.77 8.51993L13.98 5.30993C14.66 4.63993 15.82 5.11993 15.82 6.07993Z" fill="currentColor"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from '../IconWrapper';

export const HexhexBulk: React.FC<IconProps> = ({
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
      <path opacity="0.4" d="M17 3.33984H7L2 11.9998L7 20.6598H17L22 11.9998L17 3.33984Z" fill="currentColor"/>
<path d="M10.87 14H7.02997L5.09998 17.33L7.02997 20.66H10.87L12.8 17.33L10.87 14Z" fill="currentColor"/>
<path opacity="0.6" d="M14.34 8H7.03L3.38 14.33L7.03 20.66H14.34L18 14.33L14.34 8Z" fill="currentColor"/>
    </svg>
  );
};

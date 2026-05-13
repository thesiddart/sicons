import React from 'react';
import { IconProps } from '../IconWrapper';

export const Menu1Broken: React.FC<IconProps> = ({
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
      <path d="M3 7H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M9.49023 12H21.0002" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M3 12H5.99" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
<path d="M3 17H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>
  );
};

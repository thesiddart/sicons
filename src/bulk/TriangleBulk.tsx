import React from 'react';
import { IconProps } from '../IconWrapper';

export const TriangleBulk: React.FC<IconProps> = ({
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
      <path d="M12 2.58984V13.6098L2.65 20.1498C1.8 19.1398 1.75 17.6098 2.7 15.8998L5.82 10.2898L8.76 4.99984C9.65 3.39984 10.82 2.58984 12 2.58984Z" fill="currentColor"/>
<path opacity="0.6" d="M21.3499 20.1499C20.6999 20.9399 19.5699 21.4099 18.0599 21.4099H5.9399C4.4299 21.4099 3.2999 20.9399 2.6499 20.1499L11.9999 13.6099L21.3499 20.1499Z" fill="currentColor"/>
<path opacity="0.4" d="M21.35 20.1498L12 13.6098V2.58984C13.18 2.58984 14.35 3.39984 15.24 4.99984L18.18 10.2898L21.3 15.8998C22.25 17.6098 22.2 19.1398 21.35 20.1498Z" fill="currentColor"/>
    </svg>
  );
};

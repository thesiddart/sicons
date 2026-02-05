import React from 'react';
import { IconProps } from '../IconWrapper';

export const SendBulk: React.FC<IconProps> = ({
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
      <path opacity="0.4" d="M9.50978 4.23013L18.0698 8.51013C21.9098 10.4301 21.9098 13.5701 18.0698 15.4901L9.50978 19.7701C3.74978 22.6501 1.39978 20.2901 4.27978 14.5401L5.14978 12.8101C5.39978 12.3001 5.39978 11.7101 5.14978 11.2001L4.27978 9.46013C1.39978 3.71013 3.75978 1.35013 9.50978 4.23013Z" fill="currentColor"/>
<path d="M14.8399 12.75H9.43994C9.02994 12.75 8.68994 12.41 8.68994 12C8.68994 11.59 9.02994 11.25 9.43994 11.25H14.8399C15.2499 11.25 15.5899 11.59 15.5899 12C15.5899 12.41 15.2499 12.75 14.8399 12.75Z" fill="currentColor"/>
    </svg>
  );
};

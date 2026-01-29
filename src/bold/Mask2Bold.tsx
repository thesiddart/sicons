import React from 'react';
import { IconProps } from '../IconWrapper';

export const Mask2Bold: React.FC<IconProps> = ({
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
      <path d="M18.65 4.58979C16.89 2.98979 14.56 2.02979 12 2.02979C6.5 2.02979 2.03 6.49979 2.03 11.9998C2.03 17.4998 6.5 21.9698 12 21.9698C14.56 21.9698 16.89 21.0098 18.65 19.4098C20.69 17.5998 21.97 14.9398 21.97 11.9998C21.97 9.05979 20.69 6.39979 18.65 4.58979ZM11.97 16.3898C11.95 18.0398 10.72 18.4398 9.57 17.9798C7.2 17.0298 5.53 14.7098 5.53 11.9998C5.53 9.28979 7.2 6.96979 9.57 6.00979C10.72 5.54979 11.95 5.95978 11.97 7.59978V16.3898Z" fill="currentColor"/>
    </svg>
  );
};

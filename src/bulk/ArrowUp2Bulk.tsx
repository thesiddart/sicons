import React from 'react';
import { IconProps } from '../IconWrapper';

export const ArrowUp2Bulk: React.FC<IconProps> = ({
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
      <path opacity="0.4" d="M15.4802 10.7702L11.6902 15.8202H6.08024C5.12024 15.8202 4.64024 14.6602 5.32024 13.9802L10.5002 8.80023C11.3302 7.97023 12.6802 7.97023 13.5102 8.80023L15.4802 10.7702Z" fill="currentColor"/>
<path d="M17.9199 15.82H11.6899L15.4799 10.77L18.6899 13.98C19.3599 14.66 18.8799 15.82 17.9199 15.82Z" fill="currentColor"/>
    </svg>
  );
};

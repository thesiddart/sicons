import React from 'react';
import { IconProps } from '../IconWrapper';

export const UserEditBroken: React.FC<IconProps> = ({
  size = 24,
  color,
  style,
  ...props
}) => {
  const s = { ...(style || {}) } as Record<string, unknown>;
  const fromStyle = s.color;
  delete s.color;
  const resolvedColor: string =
    color !== undefined
      ? String(color)
      : fromStyle !== undefined && fromStyle !== null
        ? String(fromStyle)
        : 'currentColor';
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ ...(s as React.CSSProperties), color: resolvedColor }}
      {...props}
    >
      <path d="M15.02 3.01001C14.18 2.37001 13.14 2 12 2C9.24 2 7 4.24 7 7C7 9.76 9.24 12 12 12C14.76 12 17 9.76 17 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.2091 15.74L15.669 19.2801C15.529 19.4201 15.3991 19.68 15.3691 19.87L15.1791 21.22C15.1091 21.71 15.4491 22.05 15.9391 21.98L17.289 21.79C17.479 21.76 17.7491 21.63 17.8791 21.49L21.419 17.95C22.029 17.34 22.319 16.63 21.419 15.73C20.529 14.84 19.8191 15.13 19.2091 15.74Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.6992 16.25C18.9992 17.33 19.8392 18.17 20.9192 18.47" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.41016 22C3.41016 18.13 7.26018 15 12.0002 15C13.0402 15 14.0402 15.15 14.9702 15.43" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

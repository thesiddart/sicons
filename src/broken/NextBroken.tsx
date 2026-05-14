import React from 'react';
import { IconProps } from '../IconWrapper';

export const NextBroken: React.FC<IconProps> = ({
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
      <path d="M11.73 7.39006L7.57999 5.00005C5.87999 4.02005 3.75 5.24004 3.75 7.21004V16.78C3.75 18.74 5.87999 19.97 7.57999 18.99L11.73 16.6001L15.88 14.2001C17.58 13.2201 17.58 10.7701 15.88 9.79006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.2402 18.18V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.2402 14.0001V5.82007" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

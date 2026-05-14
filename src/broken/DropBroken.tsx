import React from 'react';
import { IconProps } from '../IconWrapper';

export const DropBroken: React.FC<IconProps> = ({
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
      <path d="M3.90039 13.9C3.90039 18.36 7.5304 22 12.0004 22C16.4704 22 20.1004 18.37 20.1004 13.91C20.1304 8.47996 14.5004 3.66996 12.6104 2.20996" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.6109 2.21C12.2509 1.93 11.751 1.93 11.391 2.21C10.011 3.26 6.67094 6.04 4.96094 9.6" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

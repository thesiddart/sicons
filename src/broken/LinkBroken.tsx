import React from 'react';
import { IconProps } from '../IconWrapper';

export const LinkBroken: React.FC<IconProps> = ({
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
      <path d="M3.27 12C2.48 11.05 2 9.83 2 8.5C2 5.48 4.47 3 7.5 3H12.5C15.52 3 18 5.48 18 8.5C18 11.52 15.53 14 12.5 14H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.98 21H11.5C8.48 21 6 18.52 6 15.5C6 12.48 8.47 10 11.5 10H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20.73 12C21.52 12.95 22 14.17 22 15.5C22 18.52 19.53 21 16.5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

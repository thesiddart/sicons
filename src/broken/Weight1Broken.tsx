import React from 'react';
import { IconProps } from '../IconWrapper';

export const Weight1Broken: React.FC<IconProps> = ({
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
      <path d="M17.1797 18C19.5797 18 20.1797 16.65 20.1797 15V9C20.1797 7.35 19.5797 6 17.1797 6C14.7797 6 14.1797 7.35 14.1797 9V15C14.1797 16.65 14.7797 18 17.1797 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.82031 11.3V9C3.82031 7.35 4.42031 6 6.82031 6C9.22031 6 9.82031 7.35 9.82031 9V15C9.82031 16.65 9.22031 18 6.82031 18C4.42031 18 3.82031 16.65 3.82031 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.82031 12H14.1803" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.5 14.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M1.5 14.5V9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

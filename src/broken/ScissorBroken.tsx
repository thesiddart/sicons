import React from 'react';
import { IconProps } from '../IconWrapper';

export const ScissorBroken: React.FC<IconProps> = ({
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
      <path d="M2 12.94V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.41998 10.9001C9.48037 10.9001 10.34 10.0404 10.34 8.98006C10.34 7.91967 9.48037 7.06006 8.41998 7.06006C7.3596 7.06006 6.5 7.91967 6.5 8.98006C6.5 10.0404 7.3596 10.9001 8.41998 10.9001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.41998 16.9401C9.48037 16.9401 10.34 16.0805 10.34 15.0201C10.34 13.9597 9.48037 13.1001 8.41998 13.1001C7.3596 13.1001 6.5 13.9597 6.5 15.0201C6.5 16.0805 7.3596 16.9401 8.41998 16.9401Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5002 8.69995L10.1602 14.19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17.5002 15.28L10.1602 9.79004" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

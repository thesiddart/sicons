import React from 'react';
import { IconProps } from '../IconWrapper';

export const ConvertshapeBroken: React.FC<IconProps> = ({
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
      <path d="M18.85 2H16.15C13.9 2 13 2.9 13 5.15V8.85C13 11.1 13.9 12 16.15 12H18.85C21.1 12 22 11.1 22 8.85V5.96" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.15 22H7.85C10.1 22 11 21.1 11 18.85V15.15C11 12.9 10.1 12 7.85 12H5.15C2.9 12 2 12.9 2 15.15V18.16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 15C22 18.87 18.87 22 15 22L16.05 20.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9C2 5.13 5.13 2 9 2L7.95 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

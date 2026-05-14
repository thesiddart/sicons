import React from 'react';
import { IconProps } from '../IconWrapper';

export const TextBoldBroken: React.FC<IconProps> = ({
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
      <path d="M4.88086 4.5C4.88086 3.4 5.78086 2.5 6.88086 2.5H12.0009C14.6209 2.5 16.7509 4.63 16.7509 7.25C16.7509 9.87 14.6209 12 12.0009 12H4.88086V4.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4.88086 13.98V12H14.3809C17.0009 12 19.1309 14.13 19.1309 16.75C19.1309 19.37 17.0009 21.5 14.3809 21.5H6.88086C5.78086 21.5 4.88086 20.6 4.88086 19.5V17.96" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

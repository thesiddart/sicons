import React from 'react';
import { IconProps } from '../IconWrapper';

export const CopyBroken: React.FC<IconProps> = ({
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
      <path d="M2 12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 11.1C22 14.6 20.6 16 17.1 16H16V12.9C16 9.4 14.6 8 11.1 8H8V6.9C8 3.4 9.4 2 12.9 2H17.1C20.6 2 22 3.4 22 6.9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

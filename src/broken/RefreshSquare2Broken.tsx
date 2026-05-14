import React from 'react';
import { IconProps } from '../IconWrapper';

export const RefreshSquare2Broken: React.FC<IconProps> = ({
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
      <path d="M17.5 12C17.5 15.04 15.04 17.5 12 17.5C8.96 17.5 7.10999 14.44 7.10999 14.44M7.10999 14.44H9.59M7.10999 14.44V17.19M6.5 12C6.5 8.96 8.94 6.5 12 6.5C15.67 6.5 17.5 9.56 17.5 9.56M17.5 9.56V6.81M17.5 9.56H15.06" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 14V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

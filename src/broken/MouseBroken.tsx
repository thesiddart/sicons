import React from 'react';
import { IconProps } from '../IconWrapper';

export const MouseBroken: React.FC<IconProps> = ({
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
      <path d="M4.5 13.63V14.5C4.5 18.62 7.87 22 12 22C16.12 22 19.5 18.63 19.5 14.5V9.5C19.5 5.37 16.13 2 12 2C7.87 2 4.5 5.37 4.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 11C11.17 11 10.5 10.33 10.5 9.5V7.5C10.5 6.67 11.17 6 12 6C12.82 6 13.5 6.67 13.5 7.5V9.5C13.5 10.33 12.82 11 12 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 6V2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

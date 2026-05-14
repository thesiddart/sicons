import React from 'react';
import { IconProps } from '../IconWrapper';

export const UnlockBroken: React.FC<IconProps> = ({
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
      <path d="M9.5 16C9.5 17.38 10.62 18.5 12 18.5C13.38 18.5 14.5 17.38 14.5 16C14.5 14.62 13.38 13.5 12 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 17V15C22 11 21 10 17 10H7C3 10 2 11 2 15V17C2 21 3 22 7 22H17C18.76 22 19.94 21.81 20.71 21.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 10V8C6 4.69 7 2 12 2C16.5 2 18 4 18 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

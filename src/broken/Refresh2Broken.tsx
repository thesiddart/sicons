import React from 'react';
import { IconProps } from '../IconWrapper';

export const Refresh2Broken: React.FC<IconProps> = ({
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
      <path d="M18.01 19.99C16.34 21.25 14.25 22 12 22C6.48 22 3.11 16.44 3.11 16.44M3.11 16.44H7.63M3.11 16.44V21.44M22 12C22 13.82 21.51 15.53 20.66 17M6.03 3.97C7.69 2.73 9.75 2 12 2C18.67 2 22 7.56 22 7.56M22 7.56V2.56M22 7.56H17.56M2 12C2 10.18 2.48 8.47 3.33 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

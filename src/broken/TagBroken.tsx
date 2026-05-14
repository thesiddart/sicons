import React from 'react';
import { IconProps } from '../IconWrapper';

export const TagBroken: React.FC<IconProps> = ({
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
      <path d="M19.8305 15.45C21.6905 13.59 21.6905 10.57 19.8305 8.70005L15.3005 4.17005C14.3505 3.22005 13.0405 2.71005 11.7005 2.78005L6.70046 3.02005C4.70046 3.11005 3.11046 4.70005 3.01046 6.69005L2.77046 11.69C2.71046 13.03 3.21046 14.34 4.16046 15.29L8.69046 19.82C10.5505 21.68 13.5705 21.68 15.4405 19.82L16.9605 18.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7 9.5C7 10.88 8.12 12 9.5 12C10.88 12 12 10.88 12 9.5C12 8.12 10.88 7 9.5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

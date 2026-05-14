import React from 'react';
import { IconProps } from '../IconWrapper';

export const AlignHorizontallyBroken: React.FC<IconProps> = ({
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
      <path d="M4.75 17.4V6.6C4.75 5.1 5.39 4.5 6.98 4.5H8.02C9.61 4.5 10.25 5.1 10.25 6.6V17.4C10.25 18.9 9.61 19.5 8.02 19.5H6.98C5.39 19.5 4.75 18.9 4.75 17.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.75 15.4V8.6C18.75 7.1 18.11 6.5 16.52 6.5H15.48C13.89 6.5 13.25 7.1 13.25 8.6V15.4C13.25 16.9 13.89 17.5 15.48 17.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12H4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11 12H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22.0005 12H19.3105" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

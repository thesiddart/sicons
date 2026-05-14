import React from 'react';
import { IconProps } from '../IconWrapper';

export const SortBroken: React.FC<IconProps> = ({
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
      <path d="M10 7H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M3 7H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M6 12H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M10 17H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

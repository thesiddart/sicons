import React from 'react';
import { IconProps } from '../IconWrapper';

export const RotateLeftBroken: React.FC<IconProps> = ({
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
      <path d="M20.6701 13.3299C20.6701 18.1199 16.7901 21.9999 12.0001 21.9999C7.21008 21.9999 3.33008 18.1199 3.33008 13.3299C3.33008 11.5499 3.87008 9.8899 4.79008 8.5099M9.11008 5.0799C9.98008 4.8199 10.9401 4.6499 12.0001 4.6499C15.2101 4.6499 18.0201 6.3999 19.5101 8.9899" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.86914 5.32L10.7591 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.86914 5.32007L11.2391 7.78007" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

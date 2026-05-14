import React from 'react';
import { IconProps } from '../IconWrapper';

export const DiamondsBroken: React.FC<IconProps> = ({
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
      <path d="M21.2105 13.2299C21.9805 12.3799 22.2304 10.8399 21.7604 9.7999L19.2004 4.0399C18.7404 2.9999 17.9904 2.1499 16.2904 2.1499H7.70044C6.00044 2.1499 5.25044 2.9999 4.79044 4.0399L2.23044 9.7999C1.77044 10.8399 2.02044 12.3899 2.79044 13.2299L9.65044 20.7699C10.9504 22.1899 13.0704 22.1899 14.3604 20.7699L18.3904 16.3299" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3.5 8H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

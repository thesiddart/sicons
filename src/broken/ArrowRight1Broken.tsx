import React from 'react';
import { IconProps } from '../IconWrapper';

export const ArrowRight1Broken: React.FC<IconProps> = ({
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
      <path d="M15.85 8.98992C18.72 10.6499 18.72 13.3599 15.85 15.0199L13.54 16.3599L11.23 17.6999C8.35 19.3399 6 17.9899 6 14.6699V11.9999V9.32992C6 6.01992 8.35 4.65992 11.22 6.31992" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

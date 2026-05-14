import React from 'react';
import { IconProps } from '../IconWrapper';

export const ArrowBottomBroken: React.FC<IconProps> = ({
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
      <path d="M6.30919 11.22C4.65919 8.35 6.00919 6 9.32919 6H11.9992H14.6692C17.9792 6 19.3392 8.35 17.6792 11.22L16.3392 13.53L14.9992 15.84C13.3392 18.71 10.6292 18.71 8.96919 15.84" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from '../IconWrapper';

export const NotificationCircleBroken: React.FC<IconProps> = ({
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
      <path d="M3.01953 16.3998C4.63953 19.7198 8.04953 21.9998 11.9995 21.9998C17.5195 21.9998 21.9995 17.5198 21.9995 11.9998C21.9995 11.3198 21.9295 10.6498 21.7995 10.0098" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.02 2.2C13.36 2.07 12.69 2 12 2C6.48 2 2 6.48 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19 2C17.34 2 16 3.34 16 5C16 6.66 17.34 8 19 8C20.66 8 22 6.66 22 5C22 4.64 21.94 4.3 21.82 3.99" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

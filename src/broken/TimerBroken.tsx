import React from 'react';
import { IconProps } from '../IconWrapper';

export const TimerBroken: React.FC<IconProps> = ({
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
      <path d="M9.60906 9.83L17.2591 16.78C19.2891 18.62 18.9991 22 15.2391 22H8.75906C4.99906 22 4.70906 18.62 6.73906 16.78L17.2591 7.22C19.2891 5.38 18.9991 2 15.2391 2H8.75906C4.99906 2 4.70906 5.38 6.73906 7.22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

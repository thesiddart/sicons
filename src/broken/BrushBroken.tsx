import React from 'react';
import { IconProps } from '../IconWrapper';

export const BrushBroken: React.FC<IconProps> = ({
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
      <path d="M12.98 8.32001H4V4C4 2.9 4.9 2 6 2H18C19.1 2 20 2.9 20 4V8.32001H16.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M4 11.8801C4 12.9601 4.58003 13.9601 5.53003 14.4901L8.48999 16.16C9.11999 16.51 9.51001 17.1801 9.51001 17.9001V20.0001C9.51001 21.1001 10.41 22.0001 11.51 22.0001H12.51C13.61 22.0001 14.51 21.1001 14.51 20.0001V17.9001C14.51 17.1801 14.9 16.51 15.53 16.16L18.49 14.4901C19.43 13.9601 20.02 12.9601 20.02 11.8801V8.32007" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

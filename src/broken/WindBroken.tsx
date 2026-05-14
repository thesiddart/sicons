import React from 'react';
import { IconProps } from '../IconWrapper';

export const WindBroken: React.FC<IconProps> = ({
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
      <path d="M2 15H18.5C20.43 15 22 16.57 22 18.5C22 20.43 20.43 22 18.5 22C16.57 22 15 20.43 15 18.5V18" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.05078 12H18.5008C20.4208 12 22.0008 10.43 22.0008 8.5C22.0008 6.58 20.4208 5 18.5008 5C16.5808 5 15.0008 6.57 15.0008 8.5V9" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12H4.98001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9.00012H9.31C10.8 9.00012 12 7.79012 12 6.31012C12 4.82012 10.79 3.62012 9.31 3.62012C7.82 3.62012 6.62 4.83012 6.62 6.31012V6.69012" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

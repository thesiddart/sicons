import React from 'react';
import { IconProps } from '../IconWrapper';

export const ArrowSquareBroken: React.FC<IconProps> = ({
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
      <path d="M12.1406 15.0701V13.11C12.1406 10.59 14.1806 8.54004 16.7106 8.54004H18.6706" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.61914 8.55005H7.57916C10.0992 8.55005 12.1492 10.59 12.1492 13.12V13.7701V17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.13983 6.75L5.33984 8.55L7.13983 10.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.8594 6.75L18.6594 8.55L16.8594 10.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V13.02" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

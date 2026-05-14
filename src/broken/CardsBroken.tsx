import React from 'react';
import { IconProps } from '../IconWrapper';

export const CardsBroken: React.FC<IconProps> = ({
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
      <path d="M2 12.6101H19" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.74 21H5.78003C2.76003 21 2 20.2501 2 17.2701V10.28C2 7.58005 2.63 6.71005 5 6.57005C5.24 6.56005 5.50003 6.55005 5.78003 6.55005H15.22C18.24 6.55005 19 7.30005 19 10.28V17.43C18.97 20.28 18.19 21 15.22 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 6.73V13.72C22 16.42 21.37 17.29 19 17.43V10.28C19 7.3 18.24 6.55 15.22 6.55H5.78003C5.50003 6.55 5.24 6.56 5 6.57C5.03 3.72 5.81003 3 8.78003 3H18.22C21.24 3 22 3.75 22 6.73Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.25 17.8101H6.96997" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.10938 17.8101H12.5494" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

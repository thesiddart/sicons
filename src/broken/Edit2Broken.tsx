import React from 'react';
import { IconProps } from '../IconWrapper';

export const Edit2Broken: React.FC<IconProps> = ({
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
      <path d="M17.3694 10.1699L18.7094 8.74993C20.1294 7.24993 20.7694 5.53993 18.5594 3.44993C16.3494 1.36993 14.6794 2.09993 13.2594 3.59993L5.04936 12.2899C4.73936 12.6199 4.43936 13.2699 4.37936 13.7199L4.00936 16.9599C3.87936 18.1299 4.71936 18.9299 5.87936 18.7299L9.09936 18.1799C9.54936 18.0999 10.1794 17.7699 10.4894 17.4299L14.4394 13.2499" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.8906 5.05005C12.3206 7.81005 14.5606 9.92005 17.3406 10.2" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 22H14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 22H21" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

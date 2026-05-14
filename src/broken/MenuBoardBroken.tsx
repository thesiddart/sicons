import React from 'react';
import { IconProps } from '../IconWrapper';

export const MenuBoardBroken: React.FC<IconProps> = ({
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
      <path d="M1.09976 19.0699C0.659756 20.5299 1.72974 22 3.23974 22H16.3798C17.4198 22 18.3097 21.3 18.5597 20.29L21.9297 6.76001C22.0497 6.26001 22.0098 5.76997 21.8198 5.33997C21.4898 4.53997 20.6998 3.95996 19.7498 3.95996H7.44976C6.46976 3.95996 5.58975 4.60005 5.30975 5.55005L2.67974 14.01" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16 22H20.78C22.07 22 23.08 20.91 22.99 19.62L22 6" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9.67969 6.38L10.7197 2.06006" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.3809 6.39001L17.3209 2.05005" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.69922 12H15.6992" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.7 16H14" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6.69922 16H10.9992" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

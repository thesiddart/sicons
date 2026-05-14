import React from 'react';
import { IconProps } from '../IconWrapper';

export const StrongboxBroken: React.FC<IconProps> = ({
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
      <path d="M2 15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V10.91H9.64999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.3492 10.9101C14.2492 11.6201 13.8291 12.2201 13.2491 12.5801V14.5601C13.2491 15.2501 12.6891 15.8101 11.9991 15.8101C11.3091 15.8101 10.7491 15.2501 10.7491 14.5601V12.5801C10.1691 12.2201 9.74914 11.6201 9.64914 10.9101C9.62914 10.8001 9.61914 10.6801 9.61914 10.5601C9.61914 9.04012 11.0592 7.86012 12.6392 8.28012C13.4392 8.49012 14.0891 9.14012 14.2991 9.94012C14.3891 10.2701 14.3992 10.6001 14.3492 10.9101Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10"/>
<path d="M17.9996 10.9099H14.3496" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

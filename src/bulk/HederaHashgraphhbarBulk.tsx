import React from 'react';
import { IconProps } from '../IconWrapper';

export const HederaHashgraphhbarBulk: React.FC<IconProps> = ({
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
      <path d="M7.5 17.4001V6.6001" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.5 9.7561H16.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path opacity="0.4" d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="currentColor"/>
<path d="M16.5 18.3C16.008 18.3 15.6 17.892 15.6 17.4V6.59995C15.6 6.10795 16.008 5.69995 16.5 5.69995C16.992 5.69995 17.4 6.10795 17.4 6.59995V17.4C17.4 17.892 16.992 18.3 16.5 18.3Z" fill="currentColor"/>
<path d="M16.5 15.144H7.50001C7.00801 15.144 7.60001 14.736 7.60001 14.244C7.60001 13.752 7.00801 13.344 7.50001 13.344H16.5C16.992 13.344 17.4 13.752 17.4 14.244C17.4 14.736 16.992 15.144 16.5 15.144Z" fill="currentColor"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from '../IconWrapper';

export const BluetoothBroken: React.FC<IconProps> = ({
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
      <path d="M14.9494 3.38999L13.8194 2.43998C12.8194 1.60998 11.9994 1.98998 11.9994 3.28998V20.71C11.9994 22.01 12.8194 22.39 13.8194 21.56L17.6694 18.35C18.2094 17.9 18.2194 17.15 17.7094 16.68L5.35938 5.35996" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.35938 18.64L17.7094 7.32004C18.2194 6.85004 18.2094 6.10002 17.6694 5.65002" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

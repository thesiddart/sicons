import React from 'react';
import { IconProps } from '../IconWrapper';

export const DirectNormalBroken: React.FC<IconProps> = ({
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
      <path d="M2.69 19.01C3.65 21.1 5.65 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 13.0002H5.76C6.52 13.0002 7.21 13.4302 7.55 14.1102L8.44 15.9002C9 17.0002 10 17.0002 10.24 17.0002H13.77C14.53 17.0002 15.22 16.5702 15.56 15.8902L16.45 14.1002C16.79 13.4202 17.48 12.9902 18.24 12.9902H21.98" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from '../IconWrapper';

export const ArrowUp2Broken: React.FC<IconProps> = ({
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
      <path d="M17.6897 12.7801C19.3497 15.6501 17.9897 18.0001 14.6797 18.0001H11.9997H9.32968C6.01968 18.0001 4.65968 15.6501 6.31968 12.7801L7.65968 10.4701L8.99968 8.16007C10.6597 5.29007 13.3697 5.29007 15.0297 8.16007" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

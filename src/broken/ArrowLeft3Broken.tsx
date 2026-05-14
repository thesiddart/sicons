import React from 'react';
import { IconProps } from '../IconWrapper';

export const ArrowLeft3Broken: React.FC<IconProps> = ({
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
      <path d="M12.7803 6.30992C15.6503 4.65992 18.0003 6.00993 18.0003 9.32993V11.9999V14.6699C18.0003 17.9799 15.6503 19.3399 12.7803 17.6799L10.4703 16.3399L8.16031 14.9999C5.29031 13.3399 5.29031 10.6299 8.16031 8.96993" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

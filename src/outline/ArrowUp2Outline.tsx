import React from 'react';
import { IconProps } from '../IconWrapper';

export const ArrowUp2Outline: React.FC<IconProps> = ({
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
      <path d="M19.92 15.8C19.73 15.8 19.54 15.73 19.39 15.58L12.87 9.05999C12.39 8.57999 11.61 8.57999 11.13 9.05999L4.61002 15.58C4.32002 15.87 3.84002 15.87 3.55002 15.58C3.26002 15.29 3.26002 14.81 3.55002 14.52L10.07 7.99999C11.13 6.93999 12.86 6.93999 13.93 7.99999L20.45 14.52C20.74 14.81 20.74 15.29 20.45 15.58C20.3 15.72 20.11 15.8 19.92 15.8Z" fill="currentColor"/>
    </svg>
  );
};

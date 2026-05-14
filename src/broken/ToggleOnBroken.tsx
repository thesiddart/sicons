import React from 'react';
import { IconProps } from '../IconWrapper';

export const ToggleOnBroken: React.FC<IconProps> = ({
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
      <path d="M18.5 10.8V13.2C18.5 15.2 17.7 16 15.7 16H13.3C11.3 16 10.5 15.2 10.5 13.2V10.8C10.5 8.8 11.3 8 13.3 8H15.7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 20H17C21 20 22 19 22 15V9C22 5 21 4 17 4H7C3 4 2 5 2 9V15C2 19 3 20 7 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from '../IconWrapper';

export const TextalignCenterBroken: React.FC<IconProps> = ({
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
      <path d="M7.25977 9.5H16.7398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 14.5H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M7.25977 19.5H16.7398" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.0508 4.5H21.0008" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 4.5H5.98" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from '../IconWrapper';

export const LocationMinusBroken: React.FC<IconProps> = ({
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
      <path d="M9.25 11H14.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M5.98094 4.30006C10.3509 0.190061 18.8209 1.60006 20.3809 8.51006C21.5309 13.5901 18.3709 17.8901 15.6009 20.5501C13.5909 22.4901 10.4109 22.4901 8.39094 20.5501C5.63094 17.8801 2.46094 13.5801 3.62094 8.50006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

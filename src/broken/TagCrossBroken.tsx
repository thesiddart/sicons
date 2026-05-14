import React from 'react';
import { IconProps } from '../IconWrapper';

export const TagCrossBroken: React.FC<IconProps> = ({
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
      <path d="M12.9197 3.75H10.2797C8.86969 3.75 7.52969 4.34 6.57969 5.39L3.04969 9.27C1.63969 10.82 1.63969 13.18 3.04969 14.73L6.57969 18.61C7.52969 19.65 8.86969 20.25 10.2797 20.25H16.9997C19.7597 20.25 21.9997 18.01 21.9997 15.25V8.75C21.9997 5.99 19.7597 3.75 16.9997 3.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.0005 14.47L11.0605 9.53003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M15.2109 10.32L16.0009 9.53003" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M11.0605 14.4699L13.3405 12.1799" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

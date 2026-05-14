import React from 'react';
import { IconProps } from '../IconWrapper';

export const GraphBroken: React.FC<IconProps> = ({
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
      <path d="M16.28 2.95994C13 1.99994 12 3.07994 12 5.67994V8.55994C12 10.9999 13 11.9999 15 11.9999H18.32C20.92 11.9999 22 10.9999 21.04 7.71994C20.82 6.97994 20.46 6.26994 20 5.62994" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.11944 14.43C1.30944 9.39001 4.64944 4.95001 9.25944 4.01001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M20 14.7C19.07 19.33 14.63 22.69 9.58 21.87C7.35 21.52 5.37 20.31 4 18.61" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from '../IconWrapper';

export const VolumeLowBroken: React.FC<IconProps> = ({
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
      <path d="M21.9994 12H21.8594" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18 12H19.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 14.0402C2 16.0802 3.02 17.1002 5.06 17.1002H6.52C6.9 17.1002 7.28 17.2102 7.6 17.4102L10.58 19.2702C13.16 20.8802 15.26 19.7102 15.26 16.6702V7.32021C15.26 4.28021 13.15 3.11021 10.58 4.72021L7.6 6.59021C7.27 6.79021 6.9 6.90021 6.52 6.90021H5.06C3.02 6.90021 2 7.92021 2 9.96021" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

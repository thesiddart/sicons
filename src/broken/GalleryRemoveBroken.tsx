import React from 'react';
import { IconProps } from '../IconWrapper';

export const GalleryRemoveBroken: React.FC<IconProps> = ({
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
      <path d="M9 6C7.9 6 7 6.9 7 8C7 9.1 7.9 10 9 10C10.1 10 11 9.1 11 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 12.89V15C2 20 4 22 9 22H15C20 22 22 20 22 15V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 2H9C4 2 2 4 2 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.5605 5.93957L20.4405 2.05957" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M20.4405 5.93957L16.5605 2.05957" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

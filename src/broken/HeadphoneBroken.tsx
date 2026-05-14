import React from 'react';
import { IconProps } from '../IconWrapper';

export const HeadphoneBroken: React.FC<IconProps> = ({
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
      <path d="M2.00005 12.22C1.89005 6.60005 6.33005 2.05005 11.95 2.05005C17.57 2.05005 22 6.60005 22 12.11V18.2701C22 20.2201 20.38 21.84 18.43 21.84C16.48 21.84 14.86 20.2201 14.86 18.2701V15.46C14.86 14.49 15.62 13.62 16.7 13.62C17.67 13.62 18.54 14.38 18.54 15.46V18.49" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.46 18.49V15.57C5.46 14.6 6.22 13.73 7.3 13.73C8.27 13.73 9.14 14.49 9.14 15.57V18.38C9.14 20.33 7.52 21.95 5.57 21.95C3.62 21.95 2 20.32 2 18.38V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

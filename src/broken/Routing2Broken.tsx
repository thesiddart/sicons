import React from 'react';
import { IconProps } from '../IconWrapper';

export const Routing2Broken: React.FC<IconProps> = ({
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
      <path d="M5.4707 9C7.4037 9 8.9707 7.433 8.9707 5.5C8.9707 3.567 7.4037 2 5.4707 2C3.53771 2 1.9707 3.567 1.9707 5.5C1.9707 7.433 3.53771 9 5.4707 9Z" stroke="currentColor" strokeWidth="1.5"/>
<path d="M19.9707 22H16.9707C15.8707 22 14.9707 21.1 14.9707 20V17C14.9707 15.9 15.8707 15 16.9707 15H19.9707C21.0707 15 21.9707 15.9 21.9707 17V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0017 5H14.6817C16.5317 5 17.3917 7.29 16.0017 8.51L8.01165 15.5C6.62165 16.71 7.48165 19 9.32165 19H12.0017" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.48768 5.5H5.49924" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.4877 18.5H18.4992" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

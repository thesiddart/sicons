import React from 'react';
import { IconProps } from '../IconWrapper';

export const ArrowDown1Broken: React.FC<IconProps> = ({
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
      <path d="M18.0697 14.4299L11.9997 20.4999L5.92969 14.4299" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12V20.33" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 3.5V8.03" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

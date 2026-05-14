import React from 'react';
import { IconProps } from '../IconWrapper';

export const Wind2Broken: React.FC<IconProps> = ({
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
      <path d="M9.5 11.5999C11.04 12.5199 12.96 12.5199 14.5 11.5999C16.04 10.6799 17.96 10.6799 19.5 11.5999L22 13.0999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 13.1L4.5 11.6C4.96 11.32 5.46 11.13 5.97 11.02" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 3.8999L4.5 5.3999C6.04 6.3199 7.96 6.3199 9.5 5.3999C11.04 4.4799 12.96 4.4799 14.5 5.3999C16.04 6.3199 17.96 6.3199 19.5 5.3999L22 3.8999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 20.0999L4.5 18.5999C6.04 17.6799 7.96 17.6799 9.5 18.5999C11.04 19.5199 12.96 19.5199 14.5 18.5999C16.04 17.6799 17.96 17.6799 19.5 18.5999L22 20.0999" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

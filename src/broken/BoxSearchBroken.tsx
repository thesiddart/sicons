import React from 'react';
import { IconProps } from '../IconWrapper';

export const BoxSearchBroken: React.FC<IconProps> = ({
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
      <path d="M3.16992 7.43994L11.9999 12.5499L20.7699 7.46991" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 21.61V12.54" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.0706 21.5201C13.5006 21.8401 12.7506 22.0001 12.0006 22.0001C11.2506 22.0001 10.5006 21.8401 9.9306 21.5201L4.59061 18.5601C3.38061 17.8901 2.39062 16.2101 2.39062 14.8301" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M21.6106 12.83V9.17C21.6106 7.79 20.6206 6.11002 19.4106 5.44002L14.0706 2.48C12.9306 1.84 11.0706 1.84 9.9306 2.48L4.59061 5.44002C3.38061 6.11002 2.39062 7.79 2.39062 9.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.2 21.4C20.9673 21.4 22.4 19.9673 22.4 18.2C22.4 16.4327 20.9673 15 19.2 15C17.4327 15 16 16.4327 16 18.2C16 19.9673 17.4327 21.4 19.2 21.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M23 22L22 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

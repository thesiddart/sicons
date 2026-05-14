import React from 'react';
import { IconProps } from '../IconWrapper';

export const BucketBroken: React.FC<IconProps> = ({
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
      <path d="M9.68914 3.29004L17.0391 10.6401C17.4091 11.0101 17.4091 11.61 17.0391 11.98L11.0191 18.0001C9.67914 19.3401 8.34914 19.3401 7.00914 18.0001L2.99914 13.9901C1.65914 12.6501 1.65914 11.32 2.99914 9.98004L7.30914 5.67004" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.34961 1.9502L9.68961 3.29016" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2.07031 11.9197L17.1903 11.2598" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M3 22H10" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M13 22H16" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.85 15C18.85 15 17 17.01 17 18.24C17 19.26 17.83 20.09 18.85 20.09C19.87 20.09 20.7 19.26 20.7 18.24C20.7 17.01 18.85 15 18.85 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

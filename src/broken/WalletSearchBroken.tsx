import React from 'react';
import { IconProps } from '../IconWrapper';

export const WalletSearchBroken: React.FC<IconProps> = ({
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
      <path d="M12 22H17C20 22 22 20 22 17V12C22 9.3 20.3 7.3 17.8 7C17.6 7 17.3 7 17 7H7C6.7 7 6.5 6.99998 6.2 7.09998C3.6 7.39998 2 9.3 2 12C2 12.3 2 12.7 2 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M16.7992 4.79985C17.3992 5.39985 17.6992 6.19986 17.7992 6.99986C17.5992 6.99986 17.2992 6.99986 16.9992 6.99986H6.99922C6.69922 6.99986 6.49922 6.99984 6.19922 7.09984C6.29922 6.79984 6.49922 6.59985 6.79922 6.29985L9.99922 2.99986C10.8192 2.17986 11.9092 1.83984 12.9592 1.97984" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 12.5H19C17.9 12.5 17 13.4 17 14.5C17 15.6 17.9 16.5 19 16.5H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M5.79961 21.4C7.56961 21.4 8.99961 19.97 8.99961 18.2C8.99961 16.43 7.56961 15 5.79961 15C4.02961 15 2.59961 16.43 2.59961 18.2C2.59961 19.97 4.02961 21.4 5.79961 21.4Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 22L3 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

import React from 'react';
import { IconProps } from '../IconWrapper';

export const FingerCricleBroken: React.FC<IconProps> = ({
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
      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M11.9996 9.12C12.9096 9.12 13.6496 9.86002 13.6496 10.77V13.24C13.6496 14.15 12.9096 14.89 11.9996 14.89C11.0896 14.89 10.3496 14.15 10.3496 13.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
<path d="M16.98 13.4699C16.78 16.0499 14.62 18.0699 12 18.0699C9.24 18.0699 7 15.8299 7 13.0699V10.9299C7 8.16993 9.24 5.92993 12 5.92993C14.59 5.92993 16.72 7.89992 16.97 10.4199" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
};

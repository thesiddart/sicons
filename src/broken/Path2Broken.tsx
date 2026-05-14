import React from 'react';
import { IconProps } from '../IconWrapper';

export const Path2Broken: React.FC<IconProps> = ({
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
      <path d="M9.87007 22.0001H14.1601C15.7801 22.0001 16.8501 20.8401 16.5301 19.4301L15.8401 16.3501H8.20007L7.51007 19.4301C7.20007 20.7601 8.34007 22.0001 9.87007 22.0001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.7692 13.7401C20.4092 12.2801 20.4792 11.2601 19.1792 9.61012L13.9892 3.03012C12.8992 1.65012 11.1192 1.65012 10.0192 3.03012L4.83916 9.61012C3.53916 11.2601 3.53916 12.3301 5.24916 13.7401L8.18916 16.3501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12.0098 2.66992V6.96992" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

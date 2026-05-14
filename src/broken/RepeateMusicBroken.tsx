import React from 'react';
import { IconProps } from '../IconWrapper';

export const RepeateMusicBroken: React.FC<IconProps> = ({
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
      <path d="M10.0005 21.0001L7.56055 18.66L15.5105 18.6801C19.0805 18.6801 22.0105 15.75 22.0105 12.16C22.0105 10.37 21.2806 8.74006 20.1006 7.56006" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M9 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M8.56055 4.97998C4.99055 4.97998 2.06055 7.91 2.06055 11.5C2.06055 13.29 2.79055 14.92 3.97055 16.1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M14.0602 2.65991L16.5002 4.99994L12.9902 4.98993" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

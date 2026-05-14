import React from 'react';
import { IconProps } from '../IconWrapper';

export const CardEditBroken: React.FC<IconProps> = ({
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
      <path d="M2 8.5H11.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M6 16.5H8" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.5 16.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M2 11.03V7.89C2 4.38 2.89 3.5 6.44 3.5H14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M22 12.03V16.11C22 19.62 21.11 20.5 17.56 20.5H6.44C2.89 20.5 2 19.62 2 16.11V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M19.0803 4.13006L15.3703 7.84006C15.2303 7.98006 15.0903 8.26006 15.0603 8.46006L14.8603 9.88006C14.7903 10.3901 15.1503 10.7501 15.6603 10.6801L17.0803 10.4801C17.2803 10.4501 17.5603 10.3101 17.7003 10.1701L21.4103 6.46006C22.0503 5.82006 22.3503 5.08006 21.4103 4.14006C20.4603 3.19006 19.7203 3.49006 19.0803 4.13006Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M18.5508 4.65991C18.8708 5.78991 19.7508 6.66991 20.8708 6.97991" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

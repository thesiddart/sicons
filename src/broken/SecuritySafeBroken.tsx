import React from 'react';
import { IconProps } from '../IconWrapper';

export const SecuritySafeBroken: React.FC<IconProps> = ({
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
      <path d="M3.08984 6.73003C3.08984 5.91003 3.70986 4.98004 4.47986 4.67004L10.0498 2.39007C11.2998 1.88007 12.7098 1.88007 13.9598 2.39007L19.5298 4.67004C20.2898 4.98004 20.9199 5.91003 20.9199 6.73003V11.12C20.9199 16.01 17.3698 20.59 12.5198 21.93C12.1898 22.02 11.8298 22.02 11.4998 21.93C6.64985 20.59 3.09985 16.01 3.09985 11.12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12.5C13.1046 12.5 14 11.6046 14 10.5C14 9.39543 13.1046 8.5 12 8.5C10.8954 8.5 10 9.39543 10 10.5C10 11.6046 10.8954 12.5 12 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12.5V15.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

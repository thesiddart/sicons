import React from 'react';
import { IconProps } from '../IconWrapper';

export const CropBold: React.FC<IconProps> = ({
  size = 24,
  color = 'currentColor',
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5.53 2C5.11 2 4.78 2.34 4.78 2.75V4.78H2.75C2.34 4.78 2 5.11 2 5.53C2 5.95 2.34 6.28 2.75 6.28H5.53C5.94 6.28 6.28 5.94 6.28 5.53V2.75C6.28 2.34 5.94 2 5.53 2Z" fill="currentColor"/>
<path d="M21.25 17.7202H18.47C18.06 17.7202 17.72 18.0602 17.72 18.4702V21.2502C17.72 21.6602 18.06 22.0002 18.47 22.0002C18.88 22.0002 19.22 21.6602 19.22 21.2502V19.2202H21.25C21.66 19.2202 22 18.8802 22 18.4702C22 18.0602 21.66 17.7202 21.25 17.7202Z" fill="currentColor"/>
<path d="M16.72 18.4698C16.72 17.5098 17.51 16.7198 18.47 16.7198H19.16V10.0498C19.16 7.15982 16.82 4.81982 13.93 4.81982H7.28V5.50982C7.28 6.46982 6.49 7.25982 5.53 7.25982H4.83V13.9298C4.83 16.8198 7.17 19.1598 10.06 19.1598H16.73V18.4698H16.72Z" fill="currentColor"/>
    </svg>
  );
};

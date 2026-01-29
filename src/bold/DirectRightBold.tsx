import React from 'react';
import { IconProps } from '../IconWrapper';

export const DirectRightBold: React.FC<IconProps> = ({
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
      <path d="M2.71002 17.0202L4.45002 13.5402C4.93002 12.5702 4.93002 11.4402 4.45002 10.4702L2.71002 6.98022C1.22002 4.00022 4.43002 0.850218 7.38002 2.41022L8.92002 3.23022C9.14002 3.34022 9.31002 3.52022 9.40002 3.74022L15.09 16.3902C15.32 16.9102 15.11 17.5202 14.61 17.7802L7.37002 21.5902C4.43002 23.1502 1.22002 20.0002 2.71002 17.0202Z" fill="currentColor"/>
<path d="M16.31 15.6L12.58 7.31996C12.16 6.38996 13.16 5.44996 14.06 5.92996L19.83 8.96996C22.28 10.26 22.28 13.76 19.83 15.05L17.79 16.12C17.24 16.4 16.57 16.17 16.31 15.6Z" fill="currentColor"/>
    </svg>
  );
};

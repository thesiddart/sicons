import React from 'react';
import { IconProps } from '../IconWrapper';

export const HouseBulk: React.FC<IconProps> = ({
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
      <path d="M22 22.75H2C1.59 22.75 1.25 22.41 1.25 22C1.25 21.59 1.59 21.25 2 21.25H22C22.41 21.25 22.75 21.59 22.75 22C22.75 22.41 22.41 22.75 22 22.75Z" fill="currentColor"/>
<path opacity="0.4" d="M21 9.98017V22.0002H2.94995L2.99995 9.97016C2.99995 9.36016 3.27995 8.78022 3.76995 8.40022L10.77 2.96021C11.49 2.39021 12.5099 2.39021 13.2299 2.96021L14.57 4.00019L19 7.4402L20.23 8.40022C20.72 8.78022 21 9.36017 21 9.98017Z" fill="currentColor"/>
<path d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z" fill="currentColor"/>
<path d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z" fill="currentColor"/>
<path d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z" fill="currentColor"/>
<path d="M19.0001 7.44L14.5701 4H17.9801C18.5301 4 18.9801 4.43999 18.9801 4.98999L19.0001 7.44Z" fill="currentColor"/>
    </svg>
  );
};

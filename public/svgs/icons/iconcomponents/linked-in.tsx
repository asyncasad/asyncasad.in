import * as React from 'react';
import type { SVGProps } from 'react';
const SvgLinkedIn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <g clipPath="url(#LinkedIn_svg__a)">
      <path
        fill="currentColor"
        d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0ZM14.24 40.903H7.116V17.991h7.125v22.912ZM10.678 14.87a4.127 4.127 0 0 1-4.134-4.125 4.127 4.127 0 0 1 4.134-4.125 4.125 4.125 0 0 1 0 8.25Zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572Z"
      />
    </g>
    <defs>
      <clipPath id="LinkedIn_svg__a">
        <path fill="currentColor" d="M0 0h48v48H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLinkedIn;

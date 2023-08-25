import * as React from 'react';
import type { SVGProps } from 'react';
const SvgMechaLogo = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 36 36"
    {...props}
  >
    <path
      fill="#FFF"
      d="M25.714 15.171H36v-4.628H21.457l7.086-7.088L25.27.183l-10.1 10.103V0h-4.628v14.543L3.455 7.457.183 10.73l10.103 10.1H0v4.628h14.543l-7.086 7.088 3.274 3.272 10.098-10.103V36h4.628V21.457l7.088 7.086 3.272-3.274-10.103-10.098ZM18 20.83a2.829 2.829 0 1 1 0-5.658 2.829 2.829 0 0 1 0 5.658Z"
    />
  </svg>
);
export default SvgMechaLogo;

import * as React from 'react';
import type { SVGProps } from 'react';
const SvgX = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill="currentColor"
      d="M36.653 3.808H43.4L28.66 20.655 46 43.58H32.422L21.788 29.676 9.62 43.58H2.869l15.766-18.02L2 3.808h13.922l9.613 12.709 11.118-12.71ZM34.285 39.54h3.738L13.891 7.634H9.879l24.406 31.907Z"
    />
  </svg>
);
export default SvgX;

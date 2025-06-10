import * as React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const FacebookLogo: React.FC<SvgIconProps> = ({ color = "#292D32", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <g clipPath="url(#clip0_17_61)">
      <path
        fill={color}
        d="M24 0C10.745 0 0 10.745 0 24c0 11.255 7.75 20.7 18.203 23.293V31.334h-4.95V24h4.95v-3.16c0-8.169 3.697-11.955 11.716-11.955 1.521 0 4.145.298 5.218.596v6.648c-.566-.06-1.55-.09-2.773-.09-3.935 0-5.455 1.492-5.455 5.367V24h7.84L33.4 31.334H26.91v16.49C38.793 46.39 48 36.271 48 24 48 10.745 37.255 0 24 0"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_17_61">
        <path fill={color} d="M0 0h48v48H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default FacebookLogo;

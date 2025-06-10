import * as React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const XLogo: React.FC<SvgIconProps> = ({ color = "#292D32", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <path
      fill={color}
      d="M36.653 3.808H43.4L28.66 20.655 46 43.58H32.423L21.788 29.676 9.62 43.58H2.869l15.766-18.02L2 3.808h13.922l9.613 12.709zM34.285 39.54h3.738L13.891 7.634H9.879z"
    ></path>
  </svg>
);

export default XLogo;
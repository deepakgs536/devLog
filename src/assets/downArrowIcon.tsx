import * as React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const DownArrowIcon: React.FC<SvgIconProps> = ({ color = "#292D32", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={color}
      d="M13 4a1 1 0 1 0-2 0v14.086l-4.793-4.793a1 1 0 0 0-1.414 1.414l5.793 5.793a2 2 0 0 0 2.828 0l5.793-5.793a1 1 0 0 0-1.414-1.414L13 18.086z"
    ></path>
  </svg>
);

export default DownArrowIcon;

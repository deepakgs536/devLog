import * as React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const BulbIconFilled: React.FC<SvgIconProps> = ({ color = "#292D32", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="23"
    height="23"
    fill="none"
    viewBox="0 0 14 20"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M4 19a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M10.5 13.64c0-.357.194-.682.487-.886a7 7 0 1 0-7.974 0c.293.204.487.53.487.886V14A2.5 2.5 0 0 0 6 16.5h2a2.5 2.5 0 0 0 2.5-2.5z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default BulbIconFilled;

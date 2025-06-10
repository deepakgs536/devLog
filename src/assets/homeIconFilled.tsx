import * as React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const HomeIconFilled: React.FC<SvgIconProps> = ({ color = "#292D32", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M.993 7.106A3 3 0 0 0 0 9.336V17a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9.336a3 3 0 0 0-.993-2.23l-7-6.3a3 3 0 0 0-4.014 0zM9 11a2 2 0 0 0-2 2v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a2 2 0 0 0-2-2z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default HomeIconFilled;

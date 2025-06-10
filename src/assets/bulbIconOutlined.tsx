import * as React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const BulbIconOutlined: React.FC<SvgIconProps> = ({ color = "#292D32", ...props }) => (
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
      d="M4 19a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1M9 12.745a2 2 0 0 1 .856-1.64 5 5 0 1 0-5.712 0A2 2 0 0 1 5 12.745V14a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1zm-6 0a7 7 0 1 1 8 0V14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default BulbIconOutlined;

import * as React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const HomeIconOutlined: React.FC<SvgIconProps> = ({ color = "#292D32", ...props }) => (
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
      d="M3 20a3 3 0 0 1-3-3V9.336a3 3 0 0 1 .993-2.23l7-6.3a3 3 0 0 1 4.014 0l7 6.3A3 3 0 0 1 20 9.336V17a3 3 0 0 1-3 3zM18 9.336V17a1 1 0 0 1-1 1h-3v-5a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v5H3a1 1 0 0 1-1-1V9.336a1 1 0 0 1 .331-.743l7-6.3a1 1 0 0 1 1.338 0l7 6.3a1 1 0 0 1 .331.743M8 18v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default HomeIconOutlined;

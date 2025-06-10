import * as React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const ShareIcon: React.FC<SvgIconProps> = ({ color = "#292D32", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M12 4a4 4 0 0 1 3.998-4A4.007 4.007 0 0 1 20 4.004a4.002 4.002 0 0 1-5 3.87 4 4 0 0 1-2.283-1.588l-4.891 2.55a4 4 0 0 1 0 2.336l4.891 2.538a4.005 4.005 0 0 1 4.273-1.583 4.01 4.01 0 0 1 3.006 3.879 4 4 0 1 1-7.942-.684L6.88 12.775A4 4 0 1 1 3.998 6c1.132 0 2.155.472 2.883 1.23l5.173-2.573A4 4 0 0 1 12 4m4.002 1.998a2 2 0 1 0 .002-4 2 2 0 0 0-.002 4m-12 6a2 2 0 1 0 .002-4 2 2 0 0 0-.002 4M15.998 18A2 2 0 1 0 16 14a2 2 0 0 0-.002 4"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default ShareIcon;

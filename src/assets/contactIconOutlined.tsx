import * as React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const ContactIconOutlined: React.FC<SvgIconProps> = ({ color = "#292D32", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M10 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m0 2a4 4 0 1 0 0-8 4 4 0 0 0 0 8"
      clipRule="evenodd"
    ></path>
    <path
      fill={color}
      fillRule="evenodd"
      d="M16.559 17.549A9.98 9.98 0 0 0 20 10c0-5.523-4.477-10-10-10S0 4.477 0 10a9.98 9.98 0 0 0 3.441 7.549A9.96 9.96 0 0 0 10 20a9.96 9.96 0 0 0 6.559-2.451m-6.301.447A8 8 0 0 1 10 18h-.026a8 8 0 0 1-3.937-1.05A5 5 0 0 1 10 15c1.612 0 3.048.763 3.963 1.95a7.96 7.96 0 0 1-3.705 1.046m5.304-2.246A6.99 6.99 0 0 0 10 13a6.99 6.99 0 0 0-5.562 2.75 8 8 0 1 1 11.125 0"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default ContactIconOutlined;

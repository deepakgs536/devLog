import * as React from "react";
import { PiDropSimpleBold } from "react-icons/pi";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const ContactIconFilled: React.FC<SvgIconProps> = ({ color = "#292D32", ...props }) => (
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
      d="M20 10c0 5.523-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0s10 4.477 10 10m-4.286 4.4a.854.854 0 0 1 0 1.2A7.98 7.98 0 0 1 10 18a7.98 7.98 0 0 1-5.714-2.4.854.854 0 0 1 0-1.2A7.98 7.98 0 0 1 10 12c2.238 0 4.262.92 5.714 2.4M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default ContactIconFilled;

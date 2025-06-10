import * as React from "react";
import { PiDropSimpleBold } from "react-icons/pi";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const MessageIconFilled: React.FC<SvgIconProps> = ({ color = "#292D32", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="21"
    fill="none"
    viewBox="0 0 20 19"
    {...props}
  >
    <path
      fill={color}
      fillRule="evenodd"
      d="M0 3a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H6.362a1 1 0 0 0-.64.232L3.28 18.266C1.978 19.352 0 18.426 0 16.73zm5 3a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1m1 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default MessageIconFilled;

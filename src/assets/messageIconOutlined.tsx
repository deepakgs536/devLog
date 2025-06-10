import * as React from "react";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const MessageIconOutlined: React.FC<SvgIconProps> = ({ color = "#292D32", ...props }) => (
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
      d="M5 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1M5 10a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1"
      clipRule="evenodd"
    ></path>
    <path
      fill={color}
      fillRule="evenodd"
      d="M4.72 14.464A2 2 0 0 1 6 14h11a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v13.73zM6 16h11a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3H3a3 3 0 0 0-3 3v13.73c0 1.696 1.978 2.622 3.28 1.536z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default MessageIconOutlined;

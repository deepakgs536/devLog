import * as React from "react";
import { PiDropSimpleBold } from "react-icons/pi";

interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

const TelegramLogo: React.FC<SvgIconProps> = ({ color = "#292D32", ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 48 48"
    {...props}
  >
    <g clipPath="url(#clip0_318_75)">
      <path
        fill={color}
        fillRule="evenodd"
        d="M48 24c0 13.255-10.745 24-24 24S0 37.255 0 24 10.745 0 24 0s24 10.745 24 24m-23.14-6.282q-3.502 1.455-13.996 6.029-1.704.677-1.786 1.326c-.091.73.823 1.018 2.069 1.41q.255.078.525.166c1.225.398 2.874.864 3.73.883q1.167.025 2.603-.961 9.806-6.619 10.124-6.692c.15-.033.356-.076.496.049.14.124.127.36.112.424-.09.386-3.68 3.724-5.539 5.452-.579.538-.99.92-1.074 1.007-.188.196-.38.38-.564.558-1.138 1.098-1.992 1.92.047 3.265.98.645 1.765 1.18 2.547 1.712.854.582 1.707 1.163 2.81 1.885.28.184.549.376.81.562.994.709 1.887 1.346 2.991 1.244.642-.059 1.304-.662 1.64-2.46.795-4.25 2.358-13.46 2.72-17.255a4.2 4.2 0 0 0-.04-.945c-.033-.187-.1-.453-.342-.65-.288-.233-.732-.282-.93-.279-.903.016-2.288.498-8.953 3.27"
        clipRule="evenodd"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_318_75">
        <path fill={color} d="M0 0h48v48H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default TelegramLogo;
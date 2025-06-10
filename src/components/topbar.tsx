import { useState } from "react";
import FacebookLogo from "@/assets/facebookLogo";
import GithubLogo from "@/assets/githubLogo";
import InstagramLogo from "@/assets/instagramLogo";
import LinkedinLogo from "@/assets/linkedinLogo";
import XLogo from "@/assets/xLogo";
import ShareIcon from "@/assets/shareIcon";

interface NavComponentProps {
    baseClass?: string;
  }
  
export const TopbarComp = ({ 
    baseClass = "", 
}: NavComponentProps) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  const socialIcons = [
    {
      name: "facebook",
      Component: FacebookLogo,
      hoverColor: "#1877F2",
      onClick: () => window.open("https://www.facebook.com/"),
    },
    {
      name: "instagram",
      Component: InstagramLogo,
      onClick: () => window.open("https://www.instagram.com/"),
    },
    {
      name: "x",
      Component: XLogo,
      hoverColor: "#666666",
      onClick: () => window.open("https://x.com/"),
    },
    {
      name: "linkedin",
      Component: LinkedinLogo,
      hoverColor: "#0077B5",
      onClick: () => window.open("https://www.linkedin.com/in/deepak-ganesamurthi-suseela-b0b41228b/"),
    },
    {
      name: "github",
      Component: GithubLogo,
      hoverColor: "#333333",
      onClick: () => window.open("https://github.com/deepakgs536", "_blank"),
    },
  ];

  // const handleShare = () => {
  //   navigator.clipboard.writeText(window.location.href)
  //     .then(() => {
  //       alert('Link copied to clipboard!');
  //       // Or use a toast notification library
  //     })
  //     .catch(err => {
  //       console.error('Failed to copy: ', err);
  //     });
  // };

  return (
    <div className={`px-4 md:px-20 py-4 md:py-8 flex justify-between w-full items-center text-white ${baseClass }`}>
      <div className="text-[24px] md:text-[28px] font-semibold text-center">Deepak <span className="text-[#d24250] leading-1">GS.
        </span>
      </div>

      <div className="flex space-x-4 hidden md:block">
        {socialIcons.map(({ name, Component, hoverColor, onClick }) => {
        const isHovered = hoveredIcon === name;
        const color = isHovered ? hoverColor : "#fff";

        return (
            <button
            key={name}
            onClick={onClick}
            onMouseEnter={() => setHoveredIcon(name)}
            onMouseLeave={() => setHoveredIcon(null)}
            className="transition-transform duration-300 hover:rotate-6"
            >
            {name === "instagram" ? (
                <Component
                className="w-6 h-6 transition-colors duration-300"
                useGradient={isHovered}  // Use gradient only if NOT hovered
                color={color}
                />
            ) : (
                <Component
                className="w-6 h-6 transition-colors duration-300"
                color={color}
                />
            )}
            </button>
        );
        })}
      </div>
      <div className="block md:hidden" 
      // onClick={handleShare}
      >
        <ShareIcon width={20} height={20} color="#d2425080" />
      </div>
    </div>
  );
};

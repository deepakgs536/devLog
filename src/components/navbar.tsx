import ContactIconFilled from "@/assets/contactIconFilled";
import ContactIconOutlined from "@/assets/contactIconOutlined";
import HomeIconFilled from "@/assets/homeIconFilled";
import HomeIconOutlined from "@/assets/homeIconOutlined";
import MessageIconFilled from "@/assets/messageIconFilled";
import MessageIconOutlined from "@/assets/messageIconOutlined";
import ProIconFilled from "@/assets/proIconFilled";
import ProIconOutlined from "@/assets/proIconOutlined";

import { useState } from "react";
import { Button } from "@heroui/button";
import { Tooltip } from "@heroui/react";
import BulbIconFilled from "@/assets/bulbIconFilled";
import BulbIconOutlined from "@/assets/bulbIconOutlined";

interface NavComponentProps {
  baseClass?: string;
  onNavChange?: (section: string) => void;
  selected?: string; // ✅ new prop
}

export const NavbarComponent = ({ baseClass = "", onNavChange = () => {}, selected = "home" }: NavComponentProps) => {
  const navItems = [
    { key: "home", label: "Home", Outlined: HomeIconOutlined, Filled: HomeIconFilled },
    { key: "about", label: "About", Outlined: ContactIconOutlined, Filled: ContactIconFilled },
    { key: "achievements", label: "Achievements", Outlined: BulbIconOutlined, Filled: BulbIconFilled },
    { key: "projects", label: "Projects", Outlined: ProIconOutlined, Filled: ProIconFilled },
    { key: "contact", label: "Contact", Outlined: MessageIconOutlined, Filled: MessageIconFilled },
  ];

  return (
    <div className={`flex gap-2 flex-col bg-[rgba(128,0,64,0.8)] rounded-full py-3.5 px-2.5 w-fit ${baseClass}`}>
      {navItems.map(({ key, label, Outlined, Filled }) => {
        const isActive = selected === key;
        const iconColor = isActive ? "#fcb600" : "#fff";

        return (
          <div key={key} className="relative group">
            <Tooltip
              showArrow
              classNames={{
                base: ["before:bg-white dark:before:bg-white border-red-500"],
                content: ["py-2 px-4 shadow-lg", "text-black font-josefin font-semibold bg-gradient-to-br from-white to-white border-red-400"],
              }}
              content={label}
              placement="left"
            >
              <Button
                isIconOnly
                aria-label={label}
                disableRipple
                radius="full"
                onClick={() => onNavChange(key)}
                className="bg-transparent transition-all duration-300 ease-in-out hover:scale-110"
              >
                {isActive ? <Filled color={iconColor} /> : <Outlined color={iconColor} />}
              </Button>
            </Tooltip>
          </div>
        );
      })}
    </div>
  );
};

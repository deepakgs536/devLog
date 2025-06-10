import DownArrowIcon from "@/assets/downArrowIcon";

interface InfoComponentProps {
  onNavChange?: (section: "home" | "about" | "skills" | "projects" | "contact" | string) => void;
}

export const InfoComponent = ({ onNavChange = () => {} }: InfoComponentProps) => {
  return (
    <div className="flex-1 text-white font-josefin px-4 md:px-6 lg:px-12">
      <div className="text-[28px] md:text-[64px] font-semibold text-4xl md:text-5xl font-bold leading-tight">
        Crafting Solutions with <span className="text-[#ec2c32]">Creativity & Precision</span>
      </div>
      <p className="mt-4 md:mt-6 max-w-md text-[15px] md:text-md text-white/80">
        Welcome to my portfolio! I'm Deepak GS, a passionate web developer dedicated to building innovative, user-friendly, and impactful digital experiences. Explore my work, and let’s build something extraordinary together.
      </p>
      <button
      onClick={() => onNavChange("projects")}
      className="flex gap-2 mt-4 md:mt-6 bg-[#e3302e] text-[13px] md:text-md px-2.5 md:px-6 py-1.5 md:py-3 pt-3 md:pt-4 rounded text-white font-semibold tracking-wide shadow-lg hover:bg-[#c02825] transition">
        VIEW ALL WORKS <DownArrowIcon color="#fff" width={20} className="-rotate-[90deg] -mt-0.5 md:-mt-1"/>
      </button>
    </div>
  );
}
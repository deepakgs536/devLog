import CircleIcon from "@/assets/circle";
import ProfileImage from "@/assets/profileImg.png";
import { InfoComponent } from "@/components/info";
import { useEffect, useState } from "react";

interface HomeProps {
  onNavChange?: (section: "home" | "about" | "skills" | "projects" | "contact" | string) => void;
}

export const Home = ({ onNavChange = () => {} }: HomeProps) => {

  const [size, setSize] = useState(300);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setSize(800); // md and above
      } else {
        setSize(300); // sm
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
  <div className="flex flex-col-reverse md:flex-row w-full px-2 gap-2 md:h-[calc(100vh-73px)]">
  {/* Info Component - shown below image on small, left on desktop */}
  <div className="w-full md:w-1/2 mt-4 md:mt-[8%]">
    <InfoComponent onNavChange={onNavChange} />
  </div>

  {/* Image Section - shown on top in mobile, right in desktop */}
  <div className="w-full md:w-1/2 relative flex items-center justify-center mt-0">
    <CircleIcon color="#c6382b" width={size} height={size} className="md:w-[750px] md:h-[800px]" />
    <img
      src={ProfileImage}
      alt="Profile"
      width={500}
      height={400}
      className="absolute -bottom-[6px] md:-bottom-[5px] w-[300px] md:w-[450px] md:h-[500px]"
    />
  </div>
</div>
  );
}

// TabsComponent.tsx
import React from "react";

interface TabsComponentProps {
  selected: string;
  setSelected: (tab: string) => void;
  tabs: string[];
}

export const TabsComponent: React.FC<TabsComponentProps> = ({ selected, setSelected, tabs }) => {
  return (
    <div className="flex gap-2 md:gap-4 pb-2 md:mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setSelected(tab)}
          className={`px-2 md:px-4 py-1 md:py-2 pt-2 md:pt-3 rounded font-semibold font-josefin text-white transition text-[10px] md:text-[14px] 
            ${selected === tab ? "bg-[#e3302e] text-white" : "bg-[#591a3a] hover:bg-[#e95f5e]/65"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

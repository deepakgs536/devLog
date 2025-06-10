// ExperienceSection.tsx
import { useState } from "react";
import { TabsComponent } from "./tabsComponent";
import { InfoCard } from "./infoCard";
import { SkillCard } from "./skillCard";


export const  ExperienceSection = () => {
  const [selected, setSelected] = useState("SKILL");

  const tabs = ["SKILL", "EXPERIENCE", "EDUCATION", "INTEREST"];

  const experienceData = [
    {
      title: "Crayon’d: Web Developer Intern",
      dateRange: "2024 - 2025",
      description: "Contributed to front-end and back-end development tasks, collaborated with design and product teams, and gained hands-on experience in building real-world web applications using modern frameworks and tools.",
    },
  ];

  const skillsData = [
  {
    title: "React & Next.js",
    description: "Building dynamic SPAs with server-side rendering.",
    borderColor: "border-l-4 border-[#3d346b]",
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first styling for responsive UIs.",
    borderColor: "border-l-4 border-[#e3302e]",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Mastering problem-solving through efficient algorithms.",
    borderColor: "border-l-4 border-[#3d346b]",
  },
  {
    title: "MongoDB",
    description: "NoSQL database integration and schema design.",
    borderColor: "border-l-4 border-[#e3302e]",
  },
];

const educationData = [
  {
    title: "Bachelors In Engineering In Computer Science and Engineering",
    dateRange: "2023-2027",
    description: "Pursuing a strong foundation in computer science principles. Actively involved in projects and hands-on learning to build real-world problem-solving skills.",
  },
];

const interestData = [
  {
    title: "Playing Chess",
    description: "Sharpening strategy and critical thinking through every move.",
  },
  {
    title: "Sketching",
    description: "Bringing ideas to life with pen and paper before going digital.",
  },
  {
    title: "Music",
    description: "Finding rhythm and focus through diverse musical journeys.",
  },
];

  return (
    <div className="md:w-[50%] bg-transparent md:p-6 md:p-10 md:pr-10 pl-0 md:mb-10 pt-4 !md:!pt-0">
      <TabsComponent selected={selected} setSelected={setSelected} tabs={tabs} />

      {selected === "SKILL" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 md:mt-6">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index} 
              title={skill.title}
              description={skill.description}
              borderColor={skill.borderColor}
            />
          ))}
        </div>
      )}

      {selected === "EXPERIENCE" && (
        <div className="flex flex-wrap justify-between mt-2 md:mt-0">
          {experienceData.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              dateRange={item.dateRange}
              description={item.description}
              highlightColor={item.dateRange.includes("present") ? "text-[#e3302e]" : "text-[#e3302e]"}
            />
          ))}
        </div>
      )}

      {selected === "EDUCATION" && (
        <div className="flex flex-wrap justify-between mt-2 md:mt-6">
          {educationData.map((item, index) => (
            <InfoCard
              key={index}
              title={item.title}
              dateRange={item.dateRange}
              description={item.description}
              highlightColor="text-[#e3302e]"
            />
          ))}
        </div>
      )}

      {selected === "INTEREST" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2 md:mt-6 text-white font-josefin">
          {interestData.map((interest, index) => (
            <div key={index}>
              <div className="text-[16px] font-bold">{interest.title}</div>
              <div className="text-[14px] text-white/80">{interest.description}</div>
            </div>
          ))}
        </div>
      )}

      {/* Add conditional rendering for SKILL, EDUCATION, INTEREST similarly */}
    </div>
  );
};

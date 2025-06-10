import React, { useState } from "react";
import { Card, CardHeader, Image, Button } from "@heroui/react";
import DownArrowIcon from "@/assets/downArrowIcon";

type ProjectCardProps = {
  title?: string;
  year?: number;
  img?: string;
  srcCode?: () => void;
  visit?: () => void;
};

const projects: ProjectCardProps[] = [
  {
    title: "Crypto Dashboard",
    year: 2024,
    img: "https://heroui.com/images/card-example-6.jpeg",
    srcCode: () => window.open("https://github.com/deepakgs536", "_blank"),
    visit: () => window.open("https://google.com", "_blank"),
  },
  {
    title: "NFT Marketplace",
    year: 2025,
    img: "https://heroui.com/images/card-example-6.jpeg",
    srcCode: () => window.open("https://github.com/deepakgs536", "_blank"),
    visit: () => window.open("https://google.com", "_blank"),
  },
  {
    title: "NFT Marketplace",
    year: 2024,
    img: "https://heroui.com/images/card-example-6.jpeg",
    srcCode: () => window.open("https://github.com/deepakgs536", "_blank"),
    visit: () => window.open("https://google.com", "_blank"),
  },
  {
    title: "NFT Marketplace",
    year: 2024,
    img: "https://heroui.com/images/card-example-6.jpeg",
    srcCode: () => window.open("https://github.com/deepakgs536", "_blank"),
    visit: () => window.open("https://google.com", "_blank"),
  },
  {
    title: "NFT Marketplace",
    year: 2024,
    img: "https://heroui.com/images/card-example-6.jpeg",
    srcCode: () => window.open("https://github.com/deepakgs536", "_blank"),
    visit: () => window.open("https://google.com", "_blank"),
  },
  // ... add more (at least 10 to test pagination)
];

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  year,
  img,
  srcCode,
  visit,
}) => (
  <Card isFooterBlurred className="w-full h-[250px] md:h-[300px]">
    <CardHeader className="absolute z-10 top-1 flex-col items-start">
      <h4 className="text-white font-semibold text-2xl">{title}</h4>
      <p className="text-tiny text-white/60 uppercase font-bold">{year}</p>
    </CardHeader>
    <Image
      removeWrapper
      alt={title}
      className="z-0 w-full h-full scale-125 hover:scale-150 -translate-y-6 object-cover"
      src={img}
    />
    
    <div className="absolute bottom-2 right-2 flex gap-2">
      <Button className="text-tiny text-white bg-black" radius="full" size="sm" onClick={srcCode}>
        Github
      </Button>
      <Button className="text-tiny text-white bg-black" radius="full" size="sm" onClick={visit}>
        Visit <DownArrowIcon color="#fff" className="-rotate-[125deg] -m-[8px]" height={14}/>
      </Button>
    </div>
    
  </Card>
);

export const ProjectsSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 3;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const paginatedProjects = projects.slice(
    currentPage * projectsPerPage,
    (currentPage + 1) * projectsPerPage
  );

  return (
      <div className="bg-transparent text-white px-6 py-1 md:px-20 flex 
      flex-col md:flex-row gap-5 md:gap-10 pt-0 md:pt-4">
        {/* Left Section */}
        <div className="md:w-1/3">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
            See <span className="text-red-500">My Works</span>
          </h2>
          <p className="text-[13px] md:text-sm text-gray-300">
            Discover a collection of my most recent and notable projects. Each one reflects my
            commitment to quality, creativity, and achieving client goals.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-[70%]">
          <div className="md:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedProjects.map((proj, idx) => (
              <ProjectCard key={idx} {...proj} />
            ))}
          </div>
          {/* Pagination Dots */}
          <div className="w-full flex justify-center md:mt-8">
            <div className="flex gap-2">
              {Array.from.length > 1 && Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i)}
                  className={`w-3 h-3 rounded-full ${
                    i === currentPage ? "bg-[#c02825]" : "bg-gray-500"
                  } transition-all duration-300`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
  );
};

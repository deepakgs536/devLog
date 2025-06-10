import { AchievementCard } from "@/components/AchievementCard";
import { useState } from "react";

export default function AchievementsSection() {
  const achievements = [
    {
      title: "Design Beyond Limits",
      description:
        "Stand out from the crowd with branding that speaks louder than words. Let your design work *for* you.",
      imageSrc: "https://heroui.com/images/card-example-6.jpeg", // or use your `img` import if needed
    },
    {
      title: "Creative That Converts",
      description:
        "Leverage smart visuals and proven strategy to elevate your product's reach and resonance.",
      imageSrc: "https://heroui.com/images/card-example-3.jpeg",
    },
    {
      title: "Eclipse Explorer's Guide",
      description: "Unveiled the mystery of eclipses in a NASA-backed learning program.",
      imageSrc: "https://heroui.com/images/card-example-6.jpeg", // or use your `img` import if needed
    },
    {
      title: "Epic Eclipse Exam",
      description: "Scored top 5% in NASA x Canva space knowledge quiz.",
      imageSrc: "https://heroui.com/images/card-example-4.jpeg",
    },
    {
      title: "Eclipse Explorer's Guide",
      description: "Unveiled the mystery of eclipses in a NASA-backed learning program.",
      imageSrc: "https://heroui.com/images/card-example-6.jpeg", // or use your `img` import if needed
    },
    {
      title: "Epic Eclipse Exam",
      description: "Scored top 5% in NASA x Canva space knowledge quiz.",
      imageSrc: "https://heroui.com/images/card-example-4.jpeg",
    },
    {
      title: "Eclipse Explorer's Guide",
      description: "Unveiled the mystery of eclipses in a NASA-backed learning program.",
      imageSrc: "https://heroui.com/images/card-example-6.jpeg", // or use your `img` import if needed
    },
    {
      title: "Epic Eclipse Exam",
      description: "Scored top 5% in NASA x Canva space knowledge quiz.",
      imageSrc: "https://heroui.com/images/card-example-4.jpeg",
    },
    {
      title: "Eclipse Explorer's Guide",
      description: "Unveiled the mystery of eclipses in a NASA-backed learning program.",
      imageSrc: "https://heroui.com/images/card-example-6.jpeg", // or use your `img` import if needed
    },
  ];

  const ITEMS_PER_PAGE = 9;
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(achievements.length / ITEMS_PER_PAGE);
  const paginatedItems = achievements.slice(
    currentPage * ITEMS_PER_PAGE,
    (currentPage + 1) * ITEMS_PER_PAGE
  );

  return (
    <div className="bg-transparent text-white px-6 py-1 md:px-20 flex 
      flex-col md:flex-row gap-6 md:gap-10">
        {/* Left Section */}
        <div className="md:w-3/5 h-full justify-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">
            The Impact <span className="text-red-500">I've Made</span>
          </h2>
          <p className="text-[13px] md:text-sm text-gray-300">
            Discover a collection of my most recent and notable projects. Each one reflects my
            commitment to quality, creativity, and achieving client goals.
          </p>
        </div>

        {/* Right Section */}
        <div className="relative md:h-[calc(100vh-40px)]">
        {/* Grid of Achievement Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 justify-center">
          {paginatedItems.map((item, index) => (
            <AchievementCard
              key={index}
              title={item.title}
              description={item.description}
              imageSrc={item.imageSrc}
            />
          ))}
        </div>

        {/* Pagination Dots */}
        {totalPages > 1 && (
          <div className="w-full flex justify-center mt-8 !absolute bottom-0">
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, i) => (
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
        )}
        </div>
      </div>
    
  );
}

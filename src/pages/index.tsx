import { NavbarComponent } from "@/components/navbar";
import { ProjectsSection } from "@/components/projectCard";
import { TopbarComp } from "@/components/topbar";
import { AboutSection } from "@/components/aboutSection";
import { Home } from "./home";
import AchievementsSection from "@/components/AchievementsSection";
import { ExperienceSection } from "@/components/ExperienceSection ";
import { ContactSection } from "@/components/ContactSection ";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

export default function IndexPage() {
  // Stateless scroll to section

const [selectedSection, setSelectedSection] = useState("home");

  const handleNavChange = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    const offset = window.innerWidth < 640 ? 80 : 150;

    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setSelectedSection(sectionId); // Set manually on click
    }
  };

  // Scroll-based nav update
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setSelectedSection(entry.target.id);
            break;
          }
        }
      },
      {
        threshold: 0.5, // Half the section should be visible
      }
    );

    const sectionIds = ["home", "about", "achievements", "projects", "contact"];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative bg-[#0f0739] text-white">
      {/* Topbar */}
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-blue/20 border-b border-white/10">
        <TopbarComp baseClass="w-full" />
      </div>


      {/* Desktop Sidebar */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden md:block">
        <NavbarComponent baseClass="" onNavChange={handleNavChange} selected={selectedSection} />
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="md:hidden fixed bottom-0 w-full z-50">
        <NavbarComponent
          baseClass="!flex !flex-row justify-between bg-[#032672] w-full rounded-none !py-2"
          onNavChange={handleNavChange}
          selected={selectedSection}
        />
      </div>

      {/* Main Page Sections */}
      <div className="pt-[130px] md:pt-[80px] space-y-10 md:space-y-20">
        <section id="home">
          <Home onNavChange={handleNavChange} />
        </section>

        <section id="about" className="px-6 md:px-2 md:px-14 flex flex-col md:flex-row gap-4 md:gap-0 md:h-[calc(100vh-320px)]">
          <AboutSection />
          <ExperienceSection />
        </section>

        <section id="achievements">
          <AchievementsSection />
        </section>

        <section id="projects">
          <ProjectsSection />
        </section>

        <section id="contact">
          <ContactSection />
        </section>    
      </div>
      <Footer/>
    </div>
  );
}

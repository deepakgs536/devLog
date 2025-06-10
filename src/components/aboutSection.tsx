const stats = [
  { value: '5+', label: 'YEARS EXPERIENCE' },
  { value: '10+', label: 'SATISFIED CLIENTS' },
  { value: '5+', label: 'PROJECTS DONE' },
  { value: '12', label: 'WINNING AWARDS' },
];

export const AboutSection = () => {
  return (
    <section className="md:w-[60%] bg-transparent text-white px-0 md:px-8 font-josefin h-full">
      <div className="max-w-5xl mx-auto md:px-10">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl md:text-4xl font-semibold mb-2 md:mb-4">
          About <span className="text-[#e3302e]">Deepak GS</span>
        </h2>

        {/* Subheading */}
        <p className="italic text-md md:text-lg text-white/80 mb-4 md:mb-6">
          Your vision, my expertise – together, we create magic.
        </p>

        {/* Description */}
        <p className="text-white/80 text-[13px] md:text-[14px] leading-relaxed mb-4 md:mb-12">
          Hi, I’m Deepak GS, a professional web developer with 2 years of experience. I specialize 
          in building responsive websites and dynamic web applications using modern technologies. 
          Driven by a passion for innovation, I blend clean code, user-focused design, and performance
          -driven strategy to deliver standout digital experiences. Whether it’s front-end or back-end, 
          I strive to make each project both functional and exceptional.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-3 md:gap-5">
          {stats.map((stat, index) => (
            <div key={index} className={index === 0 ? "max-w-[100px]" : ""}>
              <h3 className="text-2xl md:text-4xl font-bold text-[#e3302e]">{stat.value}</h3>
              <p className="text-[12px] md:text-sm text-white/80 mt-1 max-w-[120px]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

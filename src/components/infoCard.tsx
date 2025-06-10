// InfoCard.tsx
interface InfoCardProps {
  title: string;
  dateRange: string;
  description: string;
  highlightColor?: string;
}

export const InfoCard = ({
  title,
  dateRange,
  description,
  highlightColor = "text-[#e3302e]",
}: InfoCardProps) => {
  return (
    <div className="w-full md:w-[48%] mb-6">
      <div className="text-[18px] font-bold font-mono text-white">{title}</div>
      <div className={`text-[14px] font-medium ${highlightColor}`}>{dateRange}</div>
      <div className="text-[15px] text-white font-josefin mt-1">{description}</div>
    </div>
  );
};

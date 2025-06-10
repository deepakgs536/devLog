interface NavComponentProps {
  title?: string;
  description?: string;
  borderColor?: string;
}

export const SkillCard = ({
  title = "",
  description = "",
  borderColor = "",
}: NavComponentProps) => {
  return (
    <div className={`px-4 py-2 bg-transparent text-white font-josefin text-left ${borderColor}`}>
      <div className="text-[16px] font-bold">{title}</div>
      <div className="text-[14px] font-medium whitespace-normal break-words">{description}</div>
    </div>
  );
};

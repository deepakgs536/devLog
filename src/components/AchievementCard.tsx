import { Card, CardFooter, Image } from "@heroui/react";

type AchievementCardProps = {
  title?: string;
  description?: string;
  imageSrc?: string;
};

export const AchievementCard: React.FC<AchievementCardProps> = ({
  title = "Untitled Campaign",
  imageSrc = "",
}) => {

  return (
    <Card isFooterBlurred className="border-none w-full h-[200px]" radius="lg">
      <Image
        alt="Woman listing to music"
        className="z-0 w-full h-full object-cover"
        src={imageSrc}
      />
      <CardFooter className="before:bg-white/10 border-white/20 border-1 overflow-hidden py-1.5 absolute before:rounded-md rounded-md bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">{title}</p>
      </CardFooter>
    </Card>
  );
};

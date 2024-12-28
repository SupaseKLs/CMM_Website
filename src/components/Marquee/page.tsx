import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
  {
    img: "/images/web.png",
  },
  {
    img: "/images/web.png",
  },
  {
    img: "/images/web.png",
  },
  {
    img: "/images/web.png",
  },
  {
    img: "h/images/web.png",
  },
  {
    img: "h/images/web.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);

const ReviewCard = ({
  img,
}: {
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative cursor-pointer overflow-hidden",
      )}
    >
      <div className="flex flex-row">
        <img className="w-full" width="32" height="32" alt="" src={img} />
      </div>
    </figure>
  );
};

export default function MarqueeDemo() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard {...review} />
        ))}
      </Marquee>
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
    </div>
  );
}

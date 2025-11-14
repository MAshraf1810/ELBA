import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const slides = [
  {
    content: <div>Mohamed</div>,
  },
  {
    content: <div>Ahmed</div>,
  },
  {
    content: <div>Ziad</div>,
  },
  {
    content: <div>Yasser</div>,
  },
];

export default function HomeCarousel() {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;

    const updateStartIndex = () => {
      setActiveIndex(api.selectedScrollSnap());
    };

    updateStartIndex();
    api.on("select", updateStartIndex);
    api.on("reInit", updateStartIndex);

    return () => {
      api.off("select", updateStartIndex);
      api.off("reInit", updateStartIndex);
    };
  }, [api]);

  const TOTAL_ITEMS = slides.length;
  const middleIndex = activeIndex;
  const leftIndex =
    TOTAL_ITEMS > 1 ? (activeIndex - 1 + TOTAL_ITEMS) % TOTAL_ITEMS : null;
  const rightIndex = TOTAL_ITEMS > 1 ? (activeIndex + 1) % TOTAL_ITEMS : null;

  const getSlideConfig = (index: number) => {
    if (index === middleIndex) {
      return {
        cardClass: "bg-yellow-500 text-white",
        basisClass: "basis-[85%]",
      };
    }

    if (leftIndex !== null && index === leftIndex) {
      return {
        cardClass: "bg-blue-500 text-white",
        basisClass: "basis-[10%]",
      };
    }

    if (rightIndex !== null && index === rightIndex) {
      return {
        cardClass: "bg-green-500 text-white",
        basisClass: "basis-[10%]",
      };
    }

    return { cardClass: "", basisClass: "basis-full" };
  };

  return (
    <div className="w-full mx-auto bg-green-400">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full overflow-hidden"
        setApi={setApi}
      >
        <CarouselContent className="bg-green-950 h-[600px]">
          {slides.map((slide, index) => {
            const { cardClass, basisClass } = getSlideConfig(index);

            return (
              <CarouselItem
                key={index}
                className={`transition-[flex-basis] duration-300 ease-in-out ${basisClass}`}
              >
                <div className="h-full">
                  <Card className={`h-full overflow-hidden ${cardClass}`}>
                    <CardContent className="relative flex h-full items-start">
                      {slide.content}
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

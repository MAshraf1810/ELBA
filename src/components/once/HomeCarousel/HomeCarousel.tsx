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

  const TOTAL_ITEMS = 7;
  const leftIndex = activeIndex > 0 ? activeIndex - 1 : null;
  const middleIndex = activeIndex;
  const rightIndex = activeIndex < TOTAL_ITEMS - 1 ? activeIndex + 1 : null;

  const getSlideConfig = (index: number) => {
    if (index === middleIndex) {
      return {
        cardClass: "bg-red-500 text-white",
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
    <div className="w-full mx-auto">
      <Carousel
        opts={{
          align: "center",
        }}
        className="w-full overflow-hidden"
        setApi={setApi}
      >
        <CarouselContent>
          {Array.from({ length: TOTAL_ITEMS }).map((_, index) => {
            const { cardClass, basisClass } = getSlideConfig(index);

            return (
              <CarouselItem
                key={index}
                className={`transition-[flex-basis] duration-300 ease-in-out ${basisClass}`}
              >
                <div className="h-full">
                  <Card className={`h-full ${cardClass}`}>
                    <CardContent className="flex h-full items-center justify-center p-6">
                      <span className="text-3xl font-semibold">
                        {index + 1}
                      </span>
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

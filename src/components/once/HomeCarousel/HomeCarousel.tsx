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
import { useTranslation } from "react-i18next";

const slides = [
  {
    content: <div className="justify-center items-center text-white">A</div>,
  },
  {
    content: <div>B</div>,
  },
  {
    content: <div>C</div>,
  },
  {
    content: <div>D</div>,
  },
  {
    content: <div>E</div>,
  },
];

export default function HomeCarousel() {
  const { i18n } = useTranslation();
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
        cardClass: "bg-yellow-500",
        basisClass: "basis-[85%]",
      };
    }

    if (leftIndex !== null && index === leftIndex) {
      return {
        cardClass: "bg-blue-500",
        basisClass: "basis-[10%]",
      };
    }

    if (rightIndex !== null && index === rightIndex) {
      return {
        cardClass: "bg-green-500",
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
                    <CardContent
                      className={`relative ${
                        i18n.language === "ar" ? "text-end" : "text-start"
                      }`}
                    >
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

import { Card, CardContent } from "@/components/ui/heroCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/heroCarousel";
import useHeroCarouselSlides from "./HeroCarouselContent";

const HomeCarousel = () => {
  const slides = useHeroCarouselSlides();

  return (
    <Carousel className="h-[500px]" opts={{ align: "center" }}>
      <CarouselContent className="cursor-grab h-full">
        {slides.map((slide, index) => (
          <CarouselItem
            key={index}
            className="basis-[90%] md:basis-[85%] lg:basis-[80%] select-none"
          >
            <Card className="rounded-3xl h-[500px] overflow-hidden">
              <CardContent className="p-0 h-full select-none">
                {slide.content}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default HomeCarousel;

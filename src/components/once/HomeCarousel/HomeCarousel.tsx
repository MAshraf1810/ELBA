import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/heroCarousel";
import useHeroCarouselSlides from "./HeroCarouselContent";

const HomeCarousel = () => {
  const slides = useHeroCarouselSlides();

  return (
    <Carousel className="">
      <CarouselPrevious className="h-[500px] hover:bg-none! rounded-r-3xl! cursor-pointer!" />
      <CarouselContent>
        {slides.map((slide, index) => (
          <CarouselItem key={index}>
            <Card className="rounded-3xl h-[500px] overflow-hidden">
              <CardContent className="p-0 h-full">{slide.content}</CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext className="h-[500px] hover:bg-none! rounded-l-3xl!" />
    </Carousel>
  );
};

export default HomeCarousel;

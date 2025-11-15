import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const categoriesData = [
  {
    id: 1,
    name: "مكيفات الهواء",
    image: "/assets/HomeCarousel/air.jpeg",
  },
  {
    id: 2,
    name: "غسالات الصحون",
    image: "/assets/HomeCarousel/air.jpeg",
  },
  {
    id: 3,
    name: "ثلاجات",
    image: "/assets/HomeCarousel/air.jpeg",
  },
  {
    id: 4,
    name: "غسالات الملابس",
    image: "/assets/HomeCarousel/air.jpeg",
  },
  {
    id: 5,
    name: "افران بلت ان ",
    image: "/assets/HomeCarousel/air.jpeg",
  },
  {
    id: 6,
    name: "مايكرويفات",
    image: "/assets/HomeCarousel/air.jpeg",
  },
  {
    id: 7,
    name: "شفاطات",
    image: "/assets/HomeCarousel/air.jpeg",
  },
];

const CategoriesCarousel = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-[85%] mx-auto"
    >
      <CarouselContent>
        {categoriesData.map((category) => (
          <CarouselItem
            key={category.id}
            className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5"
          >
            <div className="p-1">
              <Card
                className="h-[345px] flex justify-end items-center"
                style={{
                  backgroundImage: `linear-gradient(180deg, rgba(217, 217, 217, 0), rgba(0, 56, 77, 0.94)), url('${category.image}')`,
                  backgroundSize: "100% 100%",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                <CardContent className="flex items-center justify-center text-white font-bold text-2xl">
                  <h3>{category.name}</h3>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className=" cursor-pointer border-none bg-(--primary_600) text-white rounded-sm p-2" />
      <CarouselNext className=" cursor-pointer border-none bg-(--primary_600) text-white rounded-sm p-2" />
    </Carousel>
  );
};

export default CategoriesCarousel;

import CategoriesCarousel from "@/components/once/CategoriesCarousel/CategoriesCarousel";
import useHeroCarouselSlides from "@/components/once/HomeCarousel/HeroCarouselContent";
import HomeCarousel from "@/components/once/HomeCarousel/HomeCarousel";
import { BsDash } from "react-icons/bs";

const Home = () => {
  const slides = useHeroCarouselSlides();
  const slideCount = slides?.length || 0;
  const middleIndex = Math.floor(slideCount / 2);

  return (
    <>
      <div dir="ltr" className="w-full overflow-hidden h-[500px] mt-5 mb-2">
        <HomeCarousel />
      </div>
      <div className="w-full flex justify-center items-center">
        {Array.from({ length: slideCount }).map((_, index) => (
          <BsDash
            key={index}
            className={
              index === middleIndex ? "text-(--primary_600)" : "text-gray-300"
            }
            size={50}
          />
        ))}
      </div>

      <div dir="ltr" className="p-2 mx-auto w-full flex justify-center mt-20">
        <CategoriesCarousel />
      </div>
    </>
  );
};

export default Home;

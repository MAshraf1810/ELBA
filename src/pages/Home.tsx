import CategoriesCarousel from "@/components/once/CategoriesCarousel/CategoriesCarousel";
import HomeCarousel from "@/components/once/HomeCarousel/HomeCarousel";

const Home = () => {
  return (
    <>
      <div dir="ltr" className="w-full overflow-hidden h-[500px] my-5">
        <HomeCarousel />
      </div>

      <div dir="ltr" className="p-2 mx-auto w-full flex justify-center mt-20">
        <CategoriesCarousel />
      </div>
    </>
  );
};

export default Home;

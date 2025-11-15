import HomeCarousel from "@/components/once/HomeCarousel/HomeCarousel";

const Home = () => {
  return (
    <>
      <div dir="ltr" className="w-full overflow-hidden h-[500px] my-5">
        <HomeCarousel />
      </div>

      <div className="bg-green-400 p-2"></div>
    </>
  );
};

export default Home;

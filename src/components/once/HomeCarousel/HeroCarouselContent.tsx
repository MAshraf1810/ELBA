import { useTranslation } from "react-i18next";

const useHeroCarouselSlides = () => {
  const { i18n } = useTranslation();

  return [
    {
      content: (
        <div
          className="h-full w-full text-white bg-no-repeat"
          style={{
            backgroundImage: "url('/assets/HomeCarousel/Carousel.webp')",
            backgroundSize: "100% 100%",
          }}
        >
          <div
            className={`w-full h-full flex flex-col justify-center px-4 md:px-12 xl:px-20 ${
              i18n.language === "ar"
                ? "items-end text-end"
                : "items-start text-start"
            }`}
          >
            <h1 className="font-bold  w-[40%] underline mt-28 xl:leading-14 xl:text-4xl">
              مساحات واسعة لتخزين مثالي تلبي جميع احتياجاتك
            </h1>
            <div
              dir={i18n.language === "ar" ? "rtl" : "ltr"}
              className="mt-10 flex gap-5 items-center"
            >
              <div
                className={`${
                  i18n.language === "ar" ? "text-start" : "text-end"
                }`}
              >
                <p className="font-bold text-5xl mb-2">أسعار</p>
                <p className="text-4xl">تبدأ من</p>
              </div>
              <div className="w-32 h-32 bg-(--blue_secondary) rounded-full flex items-center justify-center text-white text-8xl font-bold">
                437
              </div>
              <img
                className="w-12 h-12"
                src="/assets/riyalIcon.webp"
                alt="saudiArabiaFlag"
              />
            </div>
          </div>
        </div>
      ),
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
};

export default useHeroCarouselSlides;

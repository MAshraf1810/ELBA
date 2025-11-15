import { useTranslation } from "react-i18next";

const useHeroCarouselSlides = () => {
  const { i18n } = useTranslation();

  return [
    {
      content: (
        <div
          className={`w-full h-full flex items-center pr-12 ${
            i18n.language === "ar" ? "flex-row" : "flex-row-reverse"
          } p-2 bg-no-repeat bg-center`}
          style={{
            backgroundImage: "url('/assets/HomeCarousel/Content/Hero1bg.webp')",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="w-[55%] p-5">
            <img
              src="/assets/HomeCarousel/Content/hero1IMG.webp"
              className=" w-full h-full object-contain"
              alt="img"
            />
          </div>
          <div
            className={`w-[45%] flex flex-col items-end  text-white p-5 ${
              i18n.language === "ar" ? "text-right" : "text-left"
            }`}
          >
            <img
              src="/assets/HomeCarousel/Content/Elba_Candy.webp"
              className="w-[350px] h-[70px] object-contain mt-5"
              alt="title"
            />
            <h1 className="text-4xl w-[90%] underline leading-14 mb-8 mt-2">
              مساحات واسعة لتخزين مثالي تلبي جميع احتياجاتك
            </h1>

            <div className="flex flex-row items-center justify-center gap-3">
              <img
                src="/assets/riyalIcon.webp"
                alt="saudiArabiaFlag"
                className="w-10 h-10 object-contain"
              />
              <div className="w-32 h-32 bg-(--blue_secondary) rounded-full flex items-center justify-center">
                <span className="text-8xl">437</span>
              </div>
              <div>
                <p className="text-5xl">اسعار</p>
                <p className="text-4xl">تبــــدأ من</p>
              </div>
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

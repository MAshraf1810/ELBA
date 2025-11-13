import LanguageSwitcher from "../once/LanguageSwitcher";

const MainHeader = () => {
  return (
    <>
      <header className="hidden lg:block  bg-(--primary_600) py-3 px-2">
        <div className="w-[90%] mx-auto text-white flex flex-row justify-between items-center">
          <div className="flex flex-row items-center gap-2">
            <LanguageSwitcher />
          </div>
          <div className="grid grid-cols-3 items-center gap-3 md:gap-5 lg:gap-10 xl:gap-20">
            <div className="flex flex-row items-center gap-2">
              <img
                width={31}
                height={30}
                src="/assets/mainHeader/love.webp"
                alt="logo"
              />
              <div>
                <p className="text-sm font-bold mb-1">تتبع طلباتك:</p>
                <p className="text-[10px] font-normal">
                  احصل على تحديثات وإشعارات مباشرة عبر موقعنا.
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2">
              <img
                width={31}
                height={30}
                src="/assets/mainHeader/love.webp"
                alt="logo"
              />
              <div>
                <p className="text-sm font-bold mb-1">الصيانة والدعم:</p>
                <p className="text-[10px] font-normal">
                  دعم فني سريع يضمن استمرارية مشاريعك دون عواائق
                </p>
              </div>
            </div>

            <div className="flex flex-row items-center gap-2">
              <img
                width={31}
                height={30}
                src="/assets/mainHeader/person.webp"
                alt="logo"
              />
              <div>
                <p className="text-sm font-bold mb-1">
                  خدمات الأعمال والمشاريع:
                </p>
                <p className="text-[10px] font-normal">
                  أطلق أعمالك بثقة مع أدواتنا وخدماتنا الرقمية.
                </p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className="block lg:hidden bg-(--blue_primary) py-4 px-2">
        <div className="flex flex-row items-center justify-center gap-2">
          <div className="flex flex-row items-center justify-center gap-4">
            <p className="text-white text-[12px] md:text-sm font-normal">
              الشحن السريع
            </p>
            <div className="flex flex-row items-center justify-center gap-0.5 md:gap-2">
              <img
                width={14}
                height={10}
                src="/assets/mainHeader/saudiArabiaFlag.webp"
                alt="arrow-left"
              />
              <p className="text-(--primary_600) font-bold text-sm md:text-lg">
                داخل المملكة{" "}
              </p>
            </div>
          </div>
          {/* Separator */}
          <div className="bg-white border border-white h-7 md:h-8 md:mx-5" />

          <div className="flex flex-row items-center justify-center gap-4">
            <p className="text-white text-[12px] md:text-sm font-normal">
              تواصل معنا
            </p>
            <p className="text-(--primary_600) font-bold text-sm md:text-lg">
              920004188
            </p>
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;

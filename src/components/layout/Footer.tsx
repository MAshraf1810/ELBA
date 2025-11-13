import WrapperContainer from "../reuse/WrapperContainer";
import { FaXTwitter } from "react-icons/fa6";
import { RxInstagramLogo } from "react-icons/rx";
import { FaSnapchat } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { AiOutlineTikTok } from "react-icons/ai";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full pt-10 md:pt-12 xl:pt-10 overflow-hidden">
      <WrapperContainer>
        <div className="">
          <div className="flex justify-between flex-col w-full gap-6 md:flex-row md:gap-4 xl:flex-row xl:gap-0">
            <div className="md:w-2/3 xl:w-3/4">
              <img
                className="w-[200px] h-[80px] m-auto md:w-[150px] md:h-[60px] xl:w-[200px] xl:h-[80px] md:mr-0 xl:mr-0"
                src="/assets/logo.webp"
                alt="logo"
              />
              <p className="text-medium w-[80%] m-auto text-center mt-3 md:text-base md:text-start md:w-[90%] md:m-0 md:mt-6 xl:text-start xl:w-[90%] xl:m-0 xl:mt-8">
                شركة الأجهزة الإيطالية الوكيل الحصري و الوحيد في المملكة العربية
                السعودية لشركة إلبا و كاندي الإيطالية، الرائدة في مجال البيع و
                توزيع الأجهزة المنزلية
              </p>

              <div>
                <h3 className="text-2xl font-bold text-center text-(--blue_secondary) mt-5 md:text-start md:mt-6 xl:text-start">
                  تـابـعـنـا
                </h3>
                <div className="flex flex-row items-center justify-center gap-4 text-3xl my-3 md:justify-start md:gap-3 md:my-4 xl:justify-start">
                  <FaXTwitter className="text-(--primary_600)" />
                  <RxInstagramLogo className="text-(--primary_600)" />
                  <FaSnapchat className="text-(--primary_600)" />
                  <TbBrandYoutube className="text-(--primary_600) " />
                  <AiOutlineTikTok className="text-(--primary_600)" />
                </div>
              </div>
            </div>
            <div className="text-center md:text-start md:w-1/2 md:mx-0 xl:text-start xl:w-1/2 mx-3 xl:mx-3">
              <h4 className="font-bold text-2xl md:text-xl xl:text-2xl text-(--primary_600) mb-4 md:mb-3">
                عن المتجر
              </h4>
              <ul className="flex flex-col gap-2 md:gap-1.5 text-lg md:text-base">
                <li>
                  <Link to="/about">المدونة</Link>
                </li>

                <li>
                  <Link to="/about">من نحن</Link>
                </li>

                <li>
                  <Link to="/about">تواصل معنا</Link>
                </li>

                <li>
                  <Link to="/about">فـروعـنا</Link>
                </li>

                <li>
                  <Link to="/about">انضم الينا</Link>
                </li>

                <li>
                  <Link to="/about">B2B</Link>
                </li>
              </ul>
            </div>
            <div className="w-full md:mt-0">
              <h4 className="font-bold text-2xl md:text-xl xl:text-2xl text-center md:text-start xl:text-start text-(--primary_600) mb-4 md:mb-3">
                روابط سريعة
              </h4>
              <div className="flex flex-row justify-between w-[90%] gap-2 mx-auto md:gap-4 md:mx-0 md:px-3 md:py-2 xl:w-[80%] xl:gap-0 xl:px-0 xl:py-0 text-center md:text-start xl:text-start">
                <div className="w-1/2">
                  <h5 className="font-bold text-medium md:text-sm mb-3 md:mb-2">
                    الاجهزة الكبيرة
                  </h5>
                  <ul className="border-r-2 border-(--primary_600) pr-4 md:pr-3 flex flex-col gap-2 md:gap-1.5">
                    <li>
                      <Link to="/about">غسالات الملابس</Link>
                    </li>
                    <li>
                      <Link to="/about">ثلاجات</Link>
                    </li>

                    <li>
                      <Link to="/about">شفاطات مطابخ</Link>
                    </li>

                    <li>
                      <Link to="/about">غسالات الصحون</Link>
                    </li>
                  </ul>
                </div>

                <div className="w-1/2">
                  <div>
                    <h5 className="font-bold text-medium md:text-sm mb-3 md:mb-2">
                      الاجهزة الصغيرة
                    </h5>
                    <ul className="border-r-2 border-(--primary_600) pr-4 md:pr-3 flex flex-col gap-2 md:gap-1.5">
                      <li>
                        <Link to="/about">مايكرويفات</Link>
                      </li>
                      <li>
                        <Link to="/about">برادات مياه</Link>
                      </li>

                      <li>
                        <Link to="/about">مكنسة كهربائية</Link>
                      </li>

                      <li>
                        <Link to="/about">صانعه سندوتشات</Link>
                      </li>

                      <li>
                        <Link to="/about">غلايات المياه</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full text-center md:text-start md:w-1/2 md:mx-0 md:mt-4 xl:text-start xl:w-1/2 xl:mx-3 xl:mt-0">
              <h4 className="font-bold text-2xl md:text-xl xl:text-2xl text-(--primary_600) mb-4 md:mb-3 mt-5 md:mt-0 xl:mt-0">
                روابط تهمك
              </h4>
              <ul className="flex flex-col gap-2 md:gap-1.5 text-lg md:text-base">
                <li>
                  <Link to="/about">الشروط والأحكام</Link>
                </li>

                <li>
                  <Link to="/about">سياسة الخصوصية</Link>
                </li>

                <li>
                  <Link to="/about">الاستبدال والاسترجاع</Link>
                </li>
              </ul>
            </div>
            <div className="text-center md:text-start md:w-2/3 md:mt-4 xl:text-start xl:w-3/4 xl:mt-0">
              <div className="flex flex-col justify-center items-center md:items-start">
                <img
                  src="/assets/footer/worksaudiCenter.webp"
                  className="w-[280px] h-[84px] md:w-[260px] md:h-[78px]"
                  alt="b2b"
                />
                <div className="hidden xl:block text-center ">
                  <img
                    src="/assets/footer/qrCode.webp"
                    className="w-[194px] h-[188px] md:w-[160px] md:h-[155px] md:mr-0 xl:mr-20"
                    alt="b2b"
                  />
                  <p className="underline text-(--primary_600) mt-3 text-end md:mt-2 text-xl md:text-lg">
                    تصفح من الموبايل
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="p-2 md:p-3 md:mt-4 text-center w-full font-normal text-xl md:text-lg xl:text-xl">
            وسائل دفع آمنة وموثوقة
          </p>

          <div className="flex flex-row items-center flex-wrap justify-center gap-2 md:gap-4 md:my-4 xl:gap-8 my-2 xl:my-8">
            <img
              className="w-[70px] h-[45px] md:w-[75px] md:h-[48px] object-contain"
              src="/assets/paymentgate/baseta.webp"
              alt="baseta"
            />
            <img
              className="w-[70px] h-[45px] md:w-[75px] md:h-[48px] object-contain"
              src="/assets/paymentgate/tabby.webp"
              alt="tabby"
            />
            <img
              className="w-[70px] h-[45px] md:w-[75px] md:h-[48px] object-contain"
              src="/assets/paymentgate/tamara.webp"
              alt="tamara"
            />
            <img
              className="w-[70px] h-[45px] md:w-[75px] md:h-[48px]"
              src="/assets/paymentgate/master.webp"
              alt="mastercard"
            />
            <img
              className="w-[70px] h-[45px] md:w-[75px] md:h-[48px] object-contain"
              src="/assets/paymentgate/visa.webp"
              alt="visa"
            />
            <img
              className="w-[70px] h-[45px] md:w-[75px] md:h-[48px] object-contain"
              src="/assets/paymentgate/applepay.webp"
              alt="applepay"
            />
          </div>
        </div>
      </WrapperContainer>

      <div
        dir="ltr"
        className="bg-(--blue_secondary) p-5 md:p-4 text-white text-center text-xl md:text-lg xl:text-xl"
      >
        &copy; 2025 جميع الحقوق محفوظة
      </div>
    </footer>
  );
};

export default Footer;

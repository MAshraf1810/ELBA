import WrapperContainer from "../reuse/WrapperContainer";
import { FaXTwitter } from "react-icons/fa6";
import { RxInstagramLogo } from "react-icons/rx";
import { FaSnapchat } from "react-icons/fa6";
import { TbBrandYoutube } from "react-icons/tb";
import { AiOutlineTikTok } from "react-icons/ai";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="w-full pt-10 overflow-hidden">
      <WrapperContainer>
        <div className="">
          <div className="flex justify-between flex-col w-full xl:flex-row">
            <div className=" xl:w-3/4">
              <img
                className="w-[200px] h-[80px]  m-auto xl:mr-0"
                src="/assets/logo.webp"
                alt="logo"
              />
              <p className="text-medium w-[80%] m-auto text-center mt-3 xl:text-start xl:w-[90%] xl:m-0 xl:mt-8">
                شركة الأجهزة الإيطالية الوكيل الحصري و الوحيد في المملكة العربية
                السعودية لشركة إلبا و كاندي الإيطالية، الرائدة في مجال البيع و 
                توزيع الأجهزة المنزلية
              </p>

              <div>
                <h3 className="text-2xl font-bold text-center  text-(--blue_secondary) mt-5 xl:text-start">
                  تـابـعـنـا
                </h3>
                <div className="flex flex-row items-center justify-center gap-4 text-3xl my-3 xl:justify-start">
                  <FaXTwitter className="text-(--primary_600)" />
                  <RxInstagramLogo className="text-(--primary_600)" />
                  <FaSnapchat className="text-(--primary_600)" />
                  <TbBrandYoutube className="text-(--primary_600) " />
                  <AiOutlineTikTok className="text-(--primary_600)" />
                </div>
              </div>
            </div>
            <div className=" text-center xl:text-start xl:w-1/2 mx-3">
              <h4 className="font-bold text-2xl text-(--primary_600) mb-4">
                عن المتجر
              </h4>
              <ul className="flex flex-col gap-2 text-lg">
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
            <div className=" w-full">
              <h4 className="font-bold text-2xl text-center xl:text-start text-(--primary_600) mb-4">
                روابط سريعة
              </h4>
              <div className="bg-amber-300 flex flex-row justify-between w-[90%] gap-2 mx-auto md:w-[50%] xl:w-[80%] xl:gap-0  text-center xl:text-start">
                <div className=" w-1/2">
                  <h5 className="font-bold text-medium mb-3">
                    الاجهزة الكبيرة
                  </h5>
                  <ul className="border-r-2 border-(--primary_600) pr-4 flex flex-col gap-2">
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

                <div className=" w-1/2">
                  <div>
                    <h5 className="font-bold text-medium mb-3">
                      الاجهزة الصغيرة
                    </h5>
                    <ul className="border-r-2 border-(--primary_600) pr-4 flex flex-col gap-2">
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
            <div className=" w-full text-center xl:text-start xl:w-1/2 xl:mx-3">
              <h4 className="font-bold text-2xl text-(--primary_600) mb-4 mt-5 xl:mt-0">
                روابط تهمك
              </h4>
              <ul className="flex flex-col gap-2 text-lg">
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
            <div className=" text-center xl:text-start xl:w-3/4">
              <div className="flex flex-col justify-center items-center">
                <img
                  src="/assets/footer/worksaudiCenter.webp"
                  className="w-[280px] h-[84px]"
                  alt="b2b"
                />
                <div className=" hidden xl:block text-center">
                  <img
                    src="/assets/footer/qrCode.webp"
                    className="w-[194px] h-[188px] mr-20"
                    alt="b2b"
                  />
                  <p className="underline text-(--primary_600) mt-3 text-xl">
                    تصفح من الموبايل
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="p-2 text-center w-full font-normal text-xl">
            وسائل دفع آمنة وموثوقة
          </p>

          <div className="flex flex-row items-center flex-wrap justify-center gap-2 xl:gap-8 my-2 xl:my-8">
            <img
              className="w-[70px] h-[45px] object-contain"
              src="/assets/paymentgate/baseta.webp"
              alt="baseta"
            />
            <img
              className="w-[70px] h-[45px] object-contain"
              src="/assets/paymentgate/tabby.webp"
              alt="tabby"
            />
            <img
              className="w-[70px] h-[45px] object-contain"
              src="/assets/paymentgate/tamara.webp"
              alt="tamara"
            />
            <img
              className="w-[70px] h-[45px]"
              src="/assets/paymentgate/master.webp"
              alt="mastercard"
            />
            <img
              className="w-[70px] h-[45px] object-contain"
              src="/assets/paymentgate/visa.webp"
              alt="visa"
            />
            <img
              className="w-[70px] h-[45px] object-contain"
              src="/assets/paymentgate/applepay.webp"
              alt="applepay"
            />
          </div>
        </div>
      </WrapperContainer>

      <div
        dir="ltr"
        className="bg-(--blue_secondary) p-5 text-white text-center text-xl"
      >
        &copy; 2025 جميع الحقوق محفوظة
      </div>
    </footer>
  );
};

export default Footer;

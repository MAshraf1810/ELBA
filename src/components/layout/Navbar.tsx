import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import { changeLanguage } from "../../utils/i18n";
import { FaRegDotCircle, FaBars, FaTimes } from "react-icons/fa";
import { TbRefresh } from "react-icons/tb";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, i18n } = useTranslation("nav");

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    changeLanguage(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="bg-red-400 top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out">
      <div
        className={`flex justify-between items-center px-6 py-4 xl:px-8 2xl:px-20  ${
          isScrolled
            ? "bg-[#00103B]/50 shadow-md"
            : `${isOpen ? "bg-[#00103B] shadow-md" : "bg-transparent"}`
        }`}
      >
        {/* Logo */}
        <div className="w-32">
          <img
            src={"/assets/images/logoWhite.png"}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex">
          <ul className="flex items-center gap-x-6 text-[12px] xl:text-lg font-medium">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? `text-white text-2xl p-2 font-bold rounded-full ${
                        i18n.language === "ar"
                          ? "custom-underline-left"
                          : "custom-underline-right"
                      }`
                    : "text-white/70 text-2xl p-2 hover:text-white"
                }
              >
                {t("home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? `text-white text-2xl p-2 font-bold rounded-full ${
                        i18n.language === "ar"
                          ? "custom-underline-left"
                          : "custom-underline-right"
                      }`
                    : "text-white/70 text-2xl p-2 hover:text-white"
                }
              >
                {t("about")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Corporate_consulting"
                className={({ isActive }) =>
                  isActive
                    ? `text-white text-2xl p-2 font-bold rounded-full ${
                        i18n.language === "ar"
                          ? "custom-underline-left"
                          : "custom-underline-right"
                      }`
                    : "text-white/70 text-2xl p-2 hover:text-white"
                }
              >
                {t("corporateConsulting")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  isActive
                    ? `text-white text-2xl p-2 font-bold rounded-full ${
                        i18n.language === "ar"
                          ? "custom-underline-left"
                          : "custom-underline-right"
                      }`
                    : "text-white/70 text-2xl p-2 hover:text-white"
                }
              >
                {t("services")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/programs"
                className={({ isActive }) =>
                  isActive
                    ? `text-white text-2xl p-2 font-bold rounded-full ${
                        i18n.language === "ar"
                          ? "custom-underline-left"
                          : "custom-underline-right"
                      }`
                    : "text-white/70 text-2xl p-2 hover:text-white"
                }
              >
                {t("programs")}
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <NavLink to="/contact-us">
            <button className="px-5 py-2 bg-[#274185] text-white text-xl rounded-full flex items-center gap-3 cursor-pointer">
              <FaRegDotCircle />
              {t("contact")}
            </button>
          </NavLink>

          <button
            onClick={toggleLanguage}
            className="group bg-[#FFFFFF1F]/90 rounded-full flex items-center font-bold text-white border-white gap-3 border-2 px-2 py-1 cursor-pointer"
          >
            <TbRefresh
              className="bg-[#00103B] p-2 h-9 w-9 text-white rounded-full 
               transition-transform duration-300 ease-in-out 
               group-hover:rotate-45"
            />
            <FaRegDotCircle className="text-white" />
            <span className="text-lg">
              {i18n.language === "en" ? t("langSwitchAr") : t("langSwitch")}
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-2xl text-white"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setIsOpen(false)}
          />
          <aside
            className={`absolute top-0 h-full w-72 max-w-full bg-[#00103A] text-white shadow-2xl flex flex-col ${
              i18n.language === "ar" ? "right-0" : "left-0"
            }`}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="w-28">
                <img
                  src={"/assets/images/logoWhite.png"}
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-2xl text-white"
              >
                <FaTimes />
              </button>
            </div>
            <ul className="flex flex-col text-lg font-medium px-6 py-4 space-y-4">
              <li>
                <NavLink to="/" onClick={() => setIsOpen(false)}>
                  {t("home")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setIsOpen(false)}>
                  {t("about")}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Corporate_consulting"
                  onClick={() => setIsOpen(false)}
                >
                  {t("corporateConsulting")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={() => setIsOpen(false)}>
                  {t("services")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/programs" onClick={() => setIsOpen(false)}>
                  {t("programs")}
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact-us" onClick={() => setIsOpen(false)}>
                  {t("contact")}
                </NavLink>
              </li>
            </ul>
            <div className="mt-auto px-6 pb-6">
              <button
                onClick={() => {
                  toggleLanguage();
                  setIsOpen(false);
                }}
                className="w-full group bg-[#FFFFFF1F]/90 rounded-full flex items-center justify-center font-bold text-white border-white gap-3 border-2 px-2 py-2 cursor-pointer"
              >
                <TbRefresh
                  className="bg-[#00103B] p-2 h-9 w-9 text-white rounded-full 
               transition-transform duration-300 ease-in-out 
               group-hover:rotate-45"
                />
                <span className="text-lg">
                  {i18n.language === "en" ? t("langSwitchAr") : t("langSwitch")}
                </span>
              </button>
            </div>
          </aside>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation("nav");

  return (
    <nav className="bg-red-400 top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out">
      <div
        className={`flex justify-between items-center px-6 py-4 xl:px-8 2xl:px-20 ${
          isOpen ? "bg-[#00103B] shadow-md" : "bg-transparent"
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
          </ul>
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
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsOpen(false)}
        />
        <aside
          className={`absolute top-0 h-full w-72 max-w-full bg-[#00103A] text-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
            i18n.language === "ar"
              ? `right-0 ${isOpen ? "translate-x-0" : "translate-x-full"}`
              : `left-0 ${isOpen ? "translate-x-0" : "-translate-x-full"}`
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
          </ul>
        </aside>
      </div>
    </nav>
  );
};

export default Navbar;

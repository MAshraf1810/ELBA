import React, { useState } from "react";
import { NavLink } from "react-router";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes } from "react-icons/fa";
import { Input } from "../ui/input";
import { IoMdGitCompare } from "react-icons/io";
import { BiSolidUser } from "react-icons/bi";
import { RiHeartsFill } from "react-icons/ri";
import { HiShoppingCart } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation("nav");

  return (
    <nav className="transition-all duration-500 ease-in-out">
      <div
        className={`flex justify-between items-center lg:w-[95%] m-auto p-3 ${
          isOpen ? "bg-(--blue_secondary) shadow-md" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <div className="w-36">
          <img
            src={"/assets/logo.webp"}
            alt="logo"
            // className="w-[180px] h-[65px] object-contain"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Desktop Links */}
        <div className="hidden lg:flex w-full">
          <div className="flex items-center justify-between gap-2 text-lg font-normal w-full mx-auto xl:w-[90%]">
            <div className="flex items-center gap-3 ">
              <div className="w-8 h-8 bg-(--blue_secondary) flex items-center justify-center rounded-full">
                <FaBars className="text-white text-lg" />
              </div>
              <span>جميع الاقسام</span>
            </div>

            <div className="relative">
              <IoSearchOutline className="absolute right-[25px] top-1/2 -translate-y-1/2 text-black font-bold z-10 pointer-events-none" />
              <Input
                className="border-black w-[300px] rounded-full pr-[58px] xl:w-[500px]"
                type="search"
                placeholder="ابحث..."
              />
            </div>

            <div className="flex items-center gap-2 ">
              <IoMdGitCompare className="text-(--primary_600) text-2xl" />
              <span>المقارنة</span>
            </div>

            <div className="flex items-center gap-2 ">
              <BiSolidUser className="text-(--primary_600) text-2xl" />
              <span>حسابي</span>
            </div>

            <div className="flex items-center gap-2 ">
              <RiHeartsFill className="text-(--primary_600) text-2xl" />
              <span>المفضلة</span>
            </div>

            <div className="">
              <HiShoppingCart className="text-(--primary_600) text-2xl" />
            </div>
          </div>
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
          className={`absolute top-0 h-full w-72 max-w-full bg-(--blue_secondary) text-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${
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

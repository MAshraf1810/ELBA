// src/components/LanguageSwitcher.tsx
import { useTranslation } from "react-i18next";
import { changeLanguage } from "@/utils/i18n";
import { TfiWorld } from "react-icons/tfi";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language || localStorage.getItem("lang") || "ar";

  const toggleLanguage = () => {
    const newLang = currentLang === "ar" ? "en" : "ar";
    changeLanguage(newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium cursor-pointer hover:scale-105 transition-ease-in-out duration-300 "
    >
      <TfiWorld size={16} />
      <span className="font-light text-lg">{currentLang === "ar" ? "English" : "الرئيسية"}</span>
    </button>
  );
}

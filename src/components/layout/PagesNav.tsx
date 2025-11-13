import { NavLink } from "react-router";

const navItems = [
  { to: "/", label: "الرئيسية" },
  { to: "/sss", label: "الأجهزة المدمجة" },
  { to: "/12", label: "أجهزة التكييف" },
  { to: "/wwe", label: "الاجهزة الكبيرة" },
  { to: "/fdf", label: "الاجهزة الصغيرة" },
  { to: "/cvcv", label: "عروضنا الحصرية" },
  { to: "/bbb", label: "المدونة" },
];

const getNavLinkClassName = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? " font-bold text-(--blue_secondary) p-2 rounded-full inline-block"
    : "text-black font-normal p-2 hover:scale-105 transition-all duration-300 inline-block";

const PagesNav = () => {
  return (
    <div className="hidden lg:flex bg-[#E6F8FF] w-full py-3">
      <ul className="flex items-center justify-center gap-x-10 font-medium w-full xl:text-lg">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} className={getNavLinkClassName}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PagesNav;

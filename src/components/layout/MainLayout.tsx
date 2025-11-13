import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainHeader from "./MainHeader";
import PagesNav from "./PagesNav";

const MainLayout = () => {
  return (
    <section>
      <MainHeader />
      <Navbar />
      <PagesNav />
      <Outlet />
      <Footer />
    </section>
  );
};

export default MainLayout;

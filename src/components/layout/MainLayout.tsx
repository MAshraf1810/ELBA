import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MainHeader from "./MainHeader";

const MainLayout = () => {
  return (
    <section>
      <MainHeader />
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
};

export default MainLayout;

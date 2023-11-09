import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const GeneralLayout = () => {
  return (
    <main>
      <Navbar />
      <div style={{ minHeight: "65vh" }}>
        <Outlet />
      </div>
      <Footer />
    </main>
  );
};

export default GeneralLayout;

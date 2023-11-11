import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const GeneralLayout = () => {
  return (
    <main>
      {window.location.pathname !== '/new' && <Navbar />}
      <div style={{ minHeight: "65vh" }}>
        <Outlet />
      </div>
      {window.location.pathname !== '/new' && <Footer />}
    </main>
  );
};

export default GeneralLayout;

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import InicioQuizFooter from "../components/InicioQuizFooter/InicioQuizFooter";

const QuizLayout = () => {
  return (
    <main>
      <Navbar />
      <div style={{ minHeight: "65vh" }}>
        <Outlet />
      </div>
      <InicioQuizFooter />
    </main>
  );
};

export default QuizLayout;

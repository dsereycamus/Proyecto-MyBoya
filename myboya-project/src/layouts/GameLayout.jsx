import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import GameFooter from "../components/GameFooter/GameFooter";

const GameLayout = () => {
  return (
    <main>
      <Navbar />
      <div style={{ minHeight: "65vh" }}>
        <Outlet />
      </div>
      <GameFooter />
    </main>
  );
};

export default GameLayout;

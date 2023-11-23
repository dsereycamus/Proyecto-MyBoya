import { Outlet } from "react-router-dom";
import GameFooter from "../components/GameFooter/GameFooter";
import GameNav from "../components/GameNav/GameNav";

const GameLayout = () => {
  return (
    <main>
      <GameNav />
      <div style={{ minHeight: "65vh" }}>
        <Outlet />
      </div>
      <GameFooter />
    </main>
  );
};

export default GameLayout;

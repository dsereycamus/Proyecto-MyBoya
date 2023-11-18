import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./components/Inicio/Inicio";
import Contacto from "./components/Contacto/Contacto";
import Sesion from "./components/Sesion/Sesion";
import About from "./components/About/About";
import InicioQuiz from "./components/InicioQuiz/InicioQuiz";
import { ParticlesBackground } from "./components/config/ParticlesBackground";
import Quiz from "./components/Quiz";
import GeneralLayout from "./layouts/GeneralLayout";
import Registro from "./components/Registro/Registro";
import New from "./components/New/New";
import Instrucciones from "./components/Inicio/Instrucciones";
import GameLayout from "./layouts/GameLayout";
import PartnersSection from "./components/Partners/Partners";
import Noticias from "./components/Noticias/Noticias";

function App() {
  return (
    <BrowserRouter>
      <ParticlesBackground />
      <Routes>
      <Route path="*" element={<div>No hay página</div>} />
        <Route path="/" element={<GeneralLayout />}>
          <Route index element={<Inicio />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="sesion" element={<Sesion />} />
          <Route path="about" element={<About />} />
          <Route path="registro" element={<Registro />} />
          <Route path="new" element={<New />} />
          <Route path="playground" element={<InicioQuiz />} />
          <Route path="instrucciones" element={<Instrucciones />} />
          <Route path="partners" element={<PartnersSection />} />
          <Route path="noticias" element={<Noticias />} />
        </Route>

        <Route path="/quiz" element={<GameLayout />}>
          <Route path="" element={<Quiz />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

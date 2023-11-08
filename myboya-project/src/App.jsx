import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./components/Inicio/Inicio";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Contacto from "./components/Contacto/Contacto";
import Sesion from "./components/Sesion/Sesion";
import About from "./components/About/About";
import InicioQuiz from "./components/InicioQuiz/InicioQuiz";
import { ParticlesBackground } from "./components/config/ParticlesBackground";

function App() {
  return (
    <BrowserRouter>
    <ParticlesBackground />
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path="/sesion" element={<Sesion/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/playground" element={<InicioQuiz/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

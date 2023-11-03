import AboutBubble from "./AboutBubble"
import bastian from "../../assets/AboutUs/bastian.png";
import catalina from "../../assets/AboutUs/cata.png";
import daniela from "../../assets/AboutUs/dani.png";
import david from "../../assets/AboutUs/david.png";
import tomas from "../../assets/AboutUs/tomas.png";
export const Team = () => {
  return(
    <section className="team">
        <h2 className="team__title">Nuestro equipo</h2>
        <AboutBubble img={daniela} name="Daniela Serey" />
      </section>
  )
}
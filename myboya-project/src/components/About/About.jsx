import "./About.css";
import "./Bubble.css";
import {Vision} from './Vision'
import {Mision} from './Mision'
import {Team} from './Team'

const About = () => {
  return (
    <main className="about-container">
      <h1 className="about__title">Quienes somos</h1>
      <Vision />
      <Mision />
      <Team />
      <div className="about-magic">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </main>
  );
};
export default About;

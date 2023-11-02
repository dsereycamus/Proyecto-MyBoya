import { Bubble } from "./Bubble";
import './Bubble.css'
import './AboutBubble.css'

const AboutBubble = ({ img, name }) => {
  return (
    <>
      <article className="card-about">
        <h3 className="card-about__title">{name}</h3>
        <Bubble img={img} name={name} />
        <div className="card-about__info">
          <h3>Cargo: </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, pariatur.
          </p>
        </div>
      </article>
    </>
  );
};
export default AboutBubble;

import { Bubble } from "./Bubble";
import './Bubble.css'
import './AboutBubble.css'

const AboutBubble = ({person}) => {
  const {name, lastName, job, description,img} = person
  return (
    <>
      <article className="card-about">
        <h3 className="card-about__title">{name + ' ' + lastName}</h3>
        <Bubble img={img} name={name} />
        <div className="card-about__info">
          <h3>{job}</h3>
          <p>
            {description}
          </p>
        </div>
      </article>
    </>
  );
};
export default AboutBubble;

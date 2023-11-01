import "./Contacto.css";
import bolsa from "../../assets/Images/bolsa1.png";
import halo from "../../assets/Images/halo.png"

const Contacto = () => {
  return (
    <div className="container">
      <div className="form-container">
        <div className="form-text">
        <img src={halo} className="halo-image" />
          <h1 className="title-contact">
            <span className="white-text">¡Mantengamos</span>{" "}
            <span className="orange-text">contacto!</span>
          </h1>
          <p className="white-text">
            ¿Tienes alguna pregunta o necesitas ayuda?
          </p>
          <p className="white-text">No dudes en comunicarte con nosotros,</p>
          <p className="white-text">estaremos encantados de ayudarte.</p>
          <p className="orange-text">¡Qué bueno es escuchar de ti!</p>
        </div>

        <div className="form-content">
          <img src={bolsa} className="bag-image" />
          <form>
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="name" id="name" />

            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" name="email" id="email" />

            <label htmlFor="subject">Asunto:</label>
            <input type="text" name="subject" id="subject" />

            <label>Tu mensaje:</label>
            <textarea name="message" id="message" cols="38" rows="5"></textarea>

            <button className="btn">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

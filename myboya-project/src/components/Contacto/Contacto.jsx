import "./Contacto.css";
import bolsa from "../../assets/Images/bolsa1.png";
import halo from "../../assets/Images/halo.png";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_tyeza2x",
        "template_jg49wao",
        form.current,
        "sdBkDbUsu_78TuC2a"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
          <form ref={form} onSubmit={sendEmail}>

            <label htmlFor="name">Nombre:</label>
            <input type="text" name="user_name" id="name"/>

            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" name="user_email" id="email" />

            <label htmlFor="subject">Asunto:</label>
            <input type="text" name="user_subject" id="subject" />

            <label>Tu mensaje:</label>
            <textarea name="message" id="message" cols="38" rows="5"></textarea>

            <button className="btn" type="submit">Enviar</button>
            
          </form> 
        </div>
      </div>
    </div>
  );
};

export default Contacto;

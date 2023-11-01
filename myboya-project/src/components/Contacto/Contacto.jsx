import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

import "./Contacto.css";
import bolsa from "../../assets/Images/bolsa1.png";
import halo from "../../assets/Images/halo.png";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Validación de campos
    const formData = new FormData(form.current);
    if (!formData.get("user_name") || !formData.get("user_email") || !formData.get("user_subject") || !formData.get("message")) {
      toast.error("Por favor, completa todos los campos.", {
        className: "toast-error",
      });
      return;
    }

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
          toast.success("Su mensaje ha sido enviado con éxito", {
            className: "toast-success",
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Error al enviar el mensaje", {
            className: "toast-error",
          });
        }
      );
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-text">
          <img src={halo} className="halo-image" alt="Halo" />
          <h1 className="title-contact">
            <span className="white-text">¡Mantengamos </span>
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
          <img src={bolsa} className="bag-image" alt="Bolsa" />
          <form ref={form} onSubmit={sendEmail}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" name="user_name" id="name" />

            <label htmlFor="email">Correo electrónico:</label>
            <input type="email" name="user_email" id="email" />

            <label htmlFor="subject">Asunto:</label>
            <input type="text" name="user_subject" id="subject" />

            <label>Tu mensaje:</label>
            <textarea name="message" id="message" cols="38" rows="5"></textarea>

            <button className="btn" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

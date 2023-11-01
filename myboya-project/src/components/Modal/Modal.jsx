import { useState } from "react";
import "./Modal.css";
import imagen from "../../assets/Icons/x.png";
import publicidad from "./PublicidadD.png";
import publicidad2 from "./publicidad2.png";

export default function Modal() {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-modal">
        Prueba modal
      </button>

      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay" />
          <div className="modal-content">
            <div className="modal-header">
              <h2>Espacio publicitario</h2>
              <button className="close-modal" onClick={toggleModal}>
                <img className="x" src={imagen} alt="Close" />
              </button>
            </div>
            <img className="Publicidad" src={publicidad} alt="Publicidad" />
            <img className="Publicidad2" src={publicidad2} alt="Publicidad2" />
            {/* <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
              perferendis suscipit officia recusandae, eveniet quaerat assumenda
            </p> */}
          </div>
        </div>
      )}
    </>
  );
}

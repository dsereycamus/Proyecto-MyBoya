import { useEffect } from "react";
import "./Modal.css";
import imagen from "../../assets/Icons/x.png";
import publicidad from "./PublicidadD.png";
import publicidad2 from "./publicidad2.png";

export default function Modal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("active-modal");
    } else {
      document.body.classList.remove("active-modal");
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="modal">
          <div onClick={onClose} className="overlay" />
          <div className="modal-content">
            <div className="modal-header">
              <h2>Espacio publicitario</h2>
              <button className="close-modal" onClick={onClose}>
                <img className="x" src={imagen} alt="Close" />
              </button>
            </div>
            <img className="Publicidad" src={publicidad} alt="Publicidad" />
            <img className="Publicidad2" src={publicidad2} alt="Publicidad2" />
          </div>
        </div>
      )}
    </>
  );
}

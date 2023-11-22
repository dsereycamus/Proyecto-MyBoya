import React, { useState, useEffect } from "react";
import "./Registro.css";
import { useNavigate } from "react-router-dom";
import { useSession } from "../../context/useSession";
import { toast } from "react-toastify";

const Registro = () => {
  const { login } = useSession();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [createUser, setCreateUser] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    if (!name || !email || !password) {
      alert("Todos los campos son requeridos");
      return;
    }
    const user = {
      name,
      email,
      password,
    };
    fetch("http://localhost:3000/api/v1/user/createUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then(async (data) => {
        console.log(data);
        setName("");
        setEmail("");
        setPassword("");
        if (data.status === 201) {
          setCreateUser(true);
          await login(email, password);
        }
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  useEffect(() => {
    if (createUser) {
      toast.success("Has creado tu cuenta con éxito");
      navigate("/playground");
    }
  }, [navigate, createUser]);

  return (
    <div className="containers-registro">
      <div className="formulario-registro">
        <h1>Crea tu cuenta en MyBoya</h1>
        <form action="">
          <div className="usuario-registro">
            <label htmlFor="name">Nombre y Apellido</label>
            <input type="text" id="name" onChange={handleName} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={handleEmail} />
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              style={{ fontFamily: "text-security-disc" }}
              onChange={handlePassword}
            />
          </div>
          <div className="btn-container-registro">
            <button
              onClick={handleSubmit}
              type="button"
              className="btn-registro"
              id="submit"
            >
              Crear cuenta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registro;

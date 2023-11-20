/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { login as loginService } from "../services/login";
import { toast } from "react-toastify";

// Crear un contexto
const SessionContext = createContext();

// Proveedor del contexto
export const SessionProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState();

  const login = async (email, password) => {
    const response = await loginService(email, password);

    if (response.status === 200) {
      window.localStorage.setItem("isLoggedIn", true);
      setIsLoggedIn(true);
      setUserData(response);
    }

    if (response.status === 404) {
      toast.warning("Tu cuenta ha sido bloqueada de forma temporal");
    }

    return response.status === 200;
  };

  const logout = () => {
    setIsLoggedIn(false);
    window.localStorage.removeItem("isLoggedIn");
  };

  useEffect(() => {
    const isLoggedInLocal = window.localStorage.getItem("isLoggedIn");
    if (isLoggedInLocal) setIsLoggedIn(true);
  }, []);

  return (
    <SessionContext.Provider value={{ isLoggedIn, userData, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};

export default SessionProvider;

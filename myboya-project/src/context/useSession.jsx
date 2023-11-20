/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from "react";
import { login as loginService } from "../services/login";
import { refresh as refreshService } from "../services/refresh";
import { toast } from "react-toastify";

// Crear un contexto
const SessionContext = createContext();

// Proveedor del contexto
export const SessionProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState();
  const [userData, setUserData] = useState();

  const login = async (email, password) => {
    const response = await loginService(email, password);

    if (response.status === 200) {
      window.localStorage.setItem("token", response.token);
      setToken(response.token);
      setIsLoggedIn(true);
      setUserData(response.data);
    }

    if (response.status === 401) {
      toast.warning("Tu cuenta ha sido bloqueada de forma temporal");
      return false;
    }

    if (response.status !== 401 && response.status !== 200) {
      toast.error("Inicio de sesión fallido. Verifica tu correo o contraseña");
      return false;
    }

    return response.status === 200;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setToken();
    window.localStorage.removeItem("token");
  };

  const refresh = async (localToken) => {
    const result = await refreshService(localToken ?? token);

    if (result.status === 200) {
      setIsLoggedIn(true);
      setToken(result.token);
    } else {
      setIsLoggedIn(false);
      setToken();
    }
  };

  useEffect(() => {
    const localToken = window.localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
      refresh(localToken);
    }
  }, []);

  return (
    <SessionContext.Provider
      value={{ isLoggedIn, userData, login, logout, token }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => {
  return useContext(SessionContext);
};

export default SessionProvider;

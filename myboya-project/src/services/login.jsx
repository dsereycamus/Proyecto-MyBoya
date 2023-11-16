export const login = async (email, password) => {
  const base = import.meta.env.VITE_BACKEND_URL;

  const response = await fetch(`${base}/user/login`, {
    //ver ruta
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  return response.json();
};

export const refresh = async (token) => {
  const base = import.meta.env.VITE_BACKEND_URL;

  const response = await fetch(`${base}/auth/refresh`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
  });

  return response.json();
};

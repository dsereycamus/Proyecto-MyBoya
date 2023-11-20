export const updateScore = async (token, score) => {
  const base = import.meta.env.VITE_BACKEND_URL;

  const response = await fetch(`${base}/user/updateScore`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ score }),
  });

  return response.json();
};

export const getTopScores = async () => {
  const base = import.meta.env.VITE_BACKEND_URL;

  const response = await fetch(`${base}/user/getTopScores`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.json();
};

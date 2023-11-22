const { createUser } = require("./user/createUser");
const { loginUser } = require("./user/login");
const { updateUserById } = require("./user/updateUser");

const userService = require("../services/user.service");

// Aquí exportamos todos los controladores:
module.exports = {
  createUser,
  loginUser,
  updateUserById,
  updateUserScore: async (req, res) => {
    const { userEmail } = req.headers;
    const { score } = req.body;

    if (!score) {
      return res
        .status(400)
        .send({ msg: "Debes enviar el puntaje que quieres añadir." });
    }

    try {
      const user = await userService.findOneByParam({ email: userEmail });
      await userService.updateUserWithParams(user._id, {
        score: score + user.score,
      });

      return res
        .status(200)
        .send({ msg: "Se ha actualizado el puntaje.", score });
    } catch (error) {
      console.error("Error al actualizar el puntaje del usuario", error);
      return res
        .status(500)
        .send({ error: "Error al actualizar el puntaje del usuario" });
    }
  },
};

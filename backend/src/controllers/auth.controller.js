const userService = require("../services/user.service.js");

const delay = require("../helpers/delay.js");
const { makeToken } = require("../helpers/makeToken.js");

const authController = {
  refreshToken: async (req, res) => {
    const { userEmail } = req.headers;

    const token = makeToken({ email: userEmail });

    return res.status(200).json({
      token,
      status: 200,
    });
  },
  changeUserStatus: async (req, res) => {
    const { email } = req.body;

    await delay(3); //Añadir tiempo de respuesta por la x cantidad de tiempo que uno quiera

    if (!email)
      return res.status(400).send({ message: "No ingresaste un correo" });

    try {
      const user = await userService.findOneByParam({
        email,
        status: "active",
      }); // Buscar al usuario por nombre de usuario

      if (!user) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      await userService.updateUserWithParams(user._id, { status: "banned" });

      //   user.status = "banned"; // Cambia estado usuario a 'banned'
      //   await user.save(); // Guarda cambios en BD

      setTimeout(async () => {
        // Temporizador para habilitar al usuario después de 6 horas
        await userService.updateUserWithParams(user._id, { status: "active" });
      }, 1000 * 60 * 60 * 6);

      return res
        .status(200)
        .json({ message: "Estado del usuario cambiado con éxito" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error interno del servidor" });
    }
  },
};

module.exports = authController;

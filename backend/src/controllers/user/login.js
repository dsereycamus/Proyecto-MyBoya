const bcrypt = require("bcrypt");
const User = require("../../models/user.model");

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if ((!email, !password)) {
    return res.status(400).json({
      msg: "Se requieren todos los campos",
      status: 404,
    });
  }

  try {
    const findUser = await User.findOne({ email: email });
    if (!findUser) {
      return res.status(404).json({
        msg: `Usuario con email ${email} no encontrado`,
        status: 404,
      });
    }
    if (findUser.status !== "active") {
      return res.status(401).json({
        msg: `Usuario con email ${email} no activo`,
        status: 404,
      });
    }

    const passVerify = bcrypt.compareSync(password, findUser.password);

    if (!passVerify) {
      return res.status(400).json({
        msg: "Contraseña incorrecta",
        status: 404,
      });
    }

    res.status(200).json({
      msg: `Usuario con email ${email} logueado correctamente`,
      status: 200,
      data: {
        name: findUser.name,
        lastName: findUser.lastName,
        email: findUser.email,
      },
    });
  } catch (error) {
    console.log(500).json({
      msg: "Error al loguear el usuario",
      status: 500,
    });
  }
};

module.exports = { loginUser };

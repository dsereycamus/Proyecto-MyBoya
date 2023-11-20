const { readToken } = require("../helpers/makeToken");

module.exports = {
  checkToken: async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization)
      return res
        .status(401)
        .send({ msg: "No estás autorizado. Intenta logeando." });

    const checkToken = readToken(authorization);

    if (!checkToken) return res.status(401).send({ msg: "Sesión expirada." });

    req.headers.userEmail = checkToken.email;

    next();
  },
};

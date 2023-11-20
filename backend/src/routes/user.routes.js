const {
  createUser,
  updateUserById,
  loginUser,
  updateUserScore,
} = require("../controllers/user.controller");
const { checkToken } = require("../middleware");

const router = require("express").Router();

// Crear usuario
router.post("/createUser", createUser);

// Actualizar datos del usuario
router.put("/update/:iduser", updateUserById);

router.post("/login", loginUser);
router.post("/updateScore", [checkToken, updateUserScore]);

module.exports = router;

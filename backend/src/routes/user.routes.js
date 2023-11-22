const {
  createUser,
  updateUserById,
  loginUser,
  updateUserScore,
  getUserScore,
  getTopScores,
} = require("../controllers/user.controller");
const { checkToken } = require("../middleware");

const router = require("express").Router();

// Crear usuario
router.post("/createUser", createUser);

// Actualizar datos del usuario
router.put("/update/:iduser", updateUserById);

router.post("/login", loginUser);
router.post("/updateScore", [checkToken, updateUserScore]);
router.get("/getTopScores", getTopScores);

module.exports = router;

const authController = require("../controllers/auth.controller");
const router = require("express").Router();
const { checkToken } = require("../middleware");

router.post("/changeUserStatus", authController.changeUserStatus);
router.get("/refresh", [checkToken, authController.refreshToken]);

module.exports = router;

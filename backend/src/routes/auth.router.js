const authController = require("../controllers/auth.controller");
const router = require("express").Router();

router.post("/changeUserStatus", authController.changeUserStatus);

module.exports = router;

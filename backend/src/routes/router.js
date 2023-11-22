const router = require("express").Router();

const userRouter = require("../routes/user.routes");
const badgeRouter = require("../routes/badge.routes");
const authRouter = require("../routes/auth.router");

router.use("/user", userRouter);
router.use("/badge", badgeRouter);
router.use("/auth", authRouter);

module.exports = router;

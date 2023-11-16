const router = require("express").Router();

const userRouter = require("../routes/user.routes");
const authRouter = require("../routes/auth.router");

router.use("/user", userRouter);
router.use("/auth", authRouter);

module.exports = router;

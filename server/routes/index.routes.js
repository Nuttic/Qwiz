const router = require("express").Router();
const authRouter = require("./auth.routes");
const tokenRouter = require("./token.routes");
const topicRouter = require("./topic.routes");
const errorPage = require("./error.routes");

router.use("/auth", authRouter);
router.use("/tokens", tokenRouter);
router.use("/topics", topicRouter);

router.use("*", errorPage);

module.exports = router;

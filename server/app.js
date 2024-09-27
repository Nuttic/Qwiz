const { configureApp, PORT } = require('./config/serverConfig');
const indexRouter = require("./routes/index.routes");

const app = configureApp();

app.use("/api", indexRouter);

app.listen(PORT, () => {
  console.log(`running on port http://localhost:${PORT}`);
});

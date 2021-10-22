const app = require("./app");
const connectDatabase = require("./config/database.js");
const dotenv = require("dotenv");

//Handle uncaught exceptions

process.on("uncaughtException", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting Down Server Due to UnHandled Promise Rejections");
  process.exit(1);
});

dotenv.config({ path: "../server/config/config.env" });

//Connecting to database
connectDatabase();
const server = app.listen(process.env.PORT, async () => {
  console.log(
    `Server Started at PORT ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});

//Handle UnHandled Promise Rejections

process.on("unhandledRejection", (err) => {
  console.log(`ERROR: ${err.message}`);
  console.log("Shutting Down Server Due to UnHandled Promise Rejections");
  server.close(() => {
    process.exit(1);
  });
});

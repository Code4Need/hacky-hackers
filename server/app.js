const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");

const errorMiddleware = require("./middlewares/errors");
app.use(express.json());
app.use(cookieParser());
//Import all Routes

const products = require("./routes/product");
const auth = require("./routes/auth");
const order = require("./routes/order");

app.use("/api", products);
app.use("/api/auth", auth);
app.use("/api", order);

// Middleware to Handle Errors
app.use(errorMiddleware);

module.exports = app;

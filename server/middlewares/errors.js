const ErrorHandler = require("../utils/errorHandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  if (process.env.NODE_ENV === "DEVELOPMENT") {
    res.status(err.statusCode).json({
      success: false,
      error: err,
      errorMessage: err.message,
      stack: err.stack,
    });
  }
  if (process.env.NODE_ENV === "PRODUCTION") {
    let error = { ...err };
    error.message = err.message;

    //Wrong Mongoose Object ID Error
    if (err.name === "CastError") {
      const message = `Resource Not Found. Invalid: ${err.path}`;
      error = new ErrorHandler(message, 400);
    }

    // Handling Mongoose Validation Errors
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors).map((value) => value.message);
      error = new ErrorHandler(message, 400);
    }

    // Handling Mongoose Duplicate Key Error
    if (err.code === 11000) {
      const message = `${Object.keys(err.keyValue)} already Exists`;
      error = new ErrorHandler(message, 400);
    }

    //Handling Wrong JWT Token
    if (err.name === "JsonWebTokenError") {
      const message = "Token is Invalid";
      error = new ErrorHandler(message, 400);
    }

    //Handling Expired JWT Token
    if (err.name === "TokenExpiredError") {
      const message = "Token is Expired";
      error = new ErrorHandler(message, 400);
    }

    res.status(error.statusCode).json({
      success: false,
      message: error.message || "Internal Server Error",
    });
  }
};

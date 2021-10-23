const User = require("../models/user");
const ErrorHandler = require("../utils/errorHandler");
const catchAsyncErrors = require("../middlewares/catchAsyncErrors");
const sendToken = require("../utils/jwtToken");
const crypto = require("crypto");

//Login User => /api/v1/login

exports.loginUser = catchAsyncErrors(async (req, res, next) => {
  const { email, userId } = req.body;
  //Check if email and password is entered by user
  if (!userId) {
    return next(new ErrorHandler("Invalid Login"), 400);
  }
  let user = await User.findOne({ userId });

  if (!user) {
    user = User.create({
      userId,
      email,
    });
  }
  sendToken(user, 200, res);
});

//Get currently Logged in user details => /api/v1/me
exports.getUserProfile = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.user.id);
  res.status(200).json({
    success: true,
    user,
  });
});

// Update Prodile => /api/me/update
exports.updateProfile = catchAsyncErrors(async (req, res, next) => {
  const newUserData = { name: req.body.name, email: req.body.email };

  //Update avatar:TODO

  const user = await User.findByIdAndUpdate(req.user.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
  });
});

//Logout User => /api/v1/logout
exports.logoutUser = catchAsyncErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });
  res.status(200).json({
    success: true,
    message: "Logged Out Successfully",
  });
});

//Admin Routes

//Get all users => /api/v1/admin/users

exports.getAllUsers = catchAsyncErrors(async (req, res, next) => {
  const users = await User.find();
  res.status(200).json({
    success: true,
    count: users.length,
    users,
  });
});

// Get Specific User Details => /api/v1/admin/user/:id

exports.getUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`User does not exist with id ${req.params.id}`)
    );
  }
  res.status(200).json({
    success: true,
    user,
  });
});

// Update Specific User Details => /api/v1/admin/user/:id

exports.updateProfileByAdmin = catchAsyncErrors(async (req, res, next) => {
  const newUserData = {
    name: req.body.name,
    email: req.body.email,
    role: req.body.role,
  };

  //Update avatar:TODO

  const user = await User.findByIdAndUpdate(req.params.id, newUserData, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  if (!user) {
    return next(
      new ErrorHandler(`User does not exist with id ${req.params.id}`)
    );
  }

  res.status(200).json({
    success: true,
  });
});

// Delete Specific User Details => /api/v1/admin/user/:id

exports.deleteUserDetails = catchAsyncErrors(async (req, res, next) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    return next(
      new ErrorHandler(`User does not exist with id ${req.params.id}`)
    );
  }

  //Remove avatar from Cloudinary-Server

  await user.remove();

  res.status(200).json({
    success: true,
  });
});

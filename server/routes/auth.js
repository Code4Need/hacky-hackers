const express = require("express");
const router = express.Router();
const {
  isAuthenticatedUser,
  authorizedRoles,
} = require("../middlewares/authHandler");
const {
  registerUser,
  loginUser,
  logoutUser,
  forgotPassword,
  resetPassword,
  getUserProfile,
  updatePassword,
  updateProfile,
  getAllUsers,
  getUserDetails,
  updateProfileByAdmin,
  deleteUserDetails,
} = require("../controllers/authController");

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/password/update").put(isAuthenticatedUser, updatePassword);
router.route("/password/forgot").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").get(logoutUser);

router.route("/me").get(isAuthenticatedUser, getUserProfile);
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

router
  .route("/admin/users")
  .get(isAuthenticatedUser, authorizedRoles("Admin"), getAllUsers);
router
  .route("/admin/user/:id")
  .get(isAuthenticatedUser, authorizedRoles("Admin"), getUserDetails)
  .put(isAuthenticatedUser, authorizedRoles("Admin"), updateProfileByAdmin)
  .delete(isAuthenticatedUser, authorizedRoles("Admin"), deleteUserDetails);

module.exports = router;

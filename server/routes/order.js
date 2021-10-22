const express = require("express");
const router = express.Router();
const {
  isAuthenticatedUser,
  authorizedRoles,
} = require("../middlewares/authHandler");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  allOrders,
  updateOrder,
} = require("../controllers/orderController");

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);
router.route("/orders/me").get(isAuthenticatedUser, myOrders);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizedRoles("Admin"), allOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizedRoles("Admin"), updateOrder);
module.exports = router;

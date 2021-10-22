const express = require("express");
const router = express.Router();
const {
    getAllProducts,
    newProduct,
    getProduct,
    updateProduct,
    deleteProduct,
    createProductReview,
    getProductReviews,
    deleteReview,
} = require("../controllers/productController");

const {
    isAuthenticatedUser,
    authorizedRoles,
} = require("../middlewares/authHandler");

router.route("/products").get(getAllProducts);
router.route("/product/:id").get(getProduct);

router
    .route("/admin/product/new")
    .post(isAuthenticatedUser, authorizedRoles("Admin"), newProduct);
router
    .route("/admin/product/:id")
    .put(isAuthenticatedUser, authorizedRoles("Admin"), updateProduct)
    .delete(isAuthenticatedUser, authorizedRoles("Admin"), deleteProduct);

router
    .route("/review")
    .put(isAuthenticatedUser, createProductReview)
router
    .route("/reviews")
    .get(isAuthenticatedUser, getProductReviews)
    .delete(isAuthenticatedUser, deleteReview)
module.exports = router;
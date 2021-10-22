const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter Product Name"],
        trim: true,
        maxLength: [100, "Product Name cannot exceed 100 characters"],
    },
    price: {
        type: Number,
        required: [true, "Please Enter Product Price"],
        maxLength: [6, "Product Price cannot exceed 5 characters"],
        default: 0.0,
    },
    description: {
        type: String,
        required: [true, "Please Enter Product Description"],
    },
    ratings: {
        type: Number,
        default: 0,
    },
    images: [{
        public_id: {
            type: String,
            required: true,
        },
        public_url: {
            type: String,
            required: true,
        },
    }, ],
    category: {
        type: String,
        required: [true, "Please Select Category for this Product"],
        enum: {
            values: [
                "Electronics",
                "Cameras",
                "Mobiles",
                "Laptop",
                "Accessories",
                "HeadPhones",
                "Books",
                "Clothes/Shoes",
                "Sports",
                "Outdoor",
                "Home",
            ],
            message: "Please select Correct Category for Product",
        },
    },
    seller: {
        type: String,
        required: [true, "Please Enter Product Seller"],
    },
    stock: {
        type: Number,
        required: [true, "Please Enter Product Stock"],
        maxLength: [5, "Product Name cannot exceed 5 characters"],
        default: 0,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    reviews: [{
        user: {
            type: mongoose.Schema.ObjectId,
            ref: "User",
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
        },
        comment: {
            type: String,
            required: true,
        },
    }, ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
module.exports = mongoose.model("Product", productSchema);
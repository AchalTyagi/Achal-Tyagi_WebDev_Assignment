import mongoose from "mongoose";

// Step 1: Create the Item Schema
const itemSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Item name is required"],
            trim: true
        },

        description: {
            type: String,
            required: [true, "Item description is required"],
            trim: true
        },

        category: {
            type: String,
            required: [true, "Item category is required"],
            trim: true
        },

        price: {
            type: Number,
            required: [true, "Item price is required"],
            min: [0, "Price cannot be negative"]
        },

        inStock: {
            type: Boolean,
            default: true
        }
    },

    // Step 2: Enable automatic timestamps
    {
        timestamps: true
    }
);

// Step 3: Create the Item Model
const Item = mongoose.model("Item", itemSchema);

// Step 4: Export the model
export default Item;

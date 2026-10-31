
import express from "express";

import {
    createItem,
    getItems,
    getItemById,
    updateItem,
    deleteItem
} from "../controllers/itemController.js";

// Create an Express router
const router = express.Router();

// CREATE - Add a new item
router.post("/", createItem);

// READ - Get all items
router.get("/", getItems);

// READ - Get a single item by ID
router.get("/:id", getItemById);

// UPDATE - Update an existing item
router.put("/:id", updateItem);

// DELETE - Delete an item
router.delete("/:id", deleteItem);

export default router;

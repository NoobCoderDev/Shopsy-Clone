import express from "express";
import { saveCategory, deleteCategory, getCategory, getCategoryList, saveInBulk, updateCategory } from "../controller/category.controller.js";

const router = express.Router();

router.post("/save-in-bulk",saveInBulk);
router.get("/list",getCategoryList);
router.post("/save",saveCategory);
router.get("/:id",getCategory);
router.delete("/delete/:id",deleteCategory);
router.put("/update/:id",updateCategory);

export default router;
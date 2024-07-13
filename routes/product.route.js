import express from "express";
import { saveInBulk } from "../controller/product.controller.js";

const router = express.Router();

router.post("/save-in-bulk",saveInBulk);
// router.get("/list",getProductList);
// router.post("/save",saveProduct);
// router.get("/:id",getProduct);
// router.delete("/:id",deleteProduct);
// router.put("/:id",updateProduct);

export default router;
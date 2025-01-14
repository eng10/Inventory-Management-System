import { Router } from "express";
import { deleteProductCategory, getAllProductCategories, getProductCategoryById, registerProductCategory, updateProductCategory } from "../Controllers/ProductCategoryController";
import { decodeToken } from "../helpers/secure/jwt";
const router = Router();
router.post("/register", decodeToken, registerProductCategory);
router.put("/update/:id", updateProductCategory);
router.delete("/delete/:id", deleteProductCategory);
router.get("/:id", getProductCategoryById);
router.get("/all", getAllProductCategories);
export default router;

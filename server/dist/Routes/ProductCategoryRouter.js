"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductCategoryController_1 = require("../Controllers/ProductCategoryController");
const jwt_1 = require("../helpers/secure/jwt");
const router = (0, express_1.Router)();
router.post("/register", jwt_1.decodeToken, ProductCategoryController_1.registerProductCategory);
router.put("/update/:id", ProductCategoryController_1.updateProductCategory);
router.delete("/delete/:id", ProductCategoryController_1.deleteProductCategory);
router.get("/:id", ProductCategoryController_1.getProductCategoryById);
router.get("/all", ProductCategoryController_1.getAllProductCategories);
exports.default = router;

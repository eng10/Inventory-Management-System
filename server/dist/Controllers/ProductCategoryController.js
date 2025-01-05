"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductCategory = exports.getProductCategoryById = exports.getAllProductCategories = exports.updateProductCategory = exports.registerProductCategory = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
// Register a new ProductCategory
const registerProductCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { name, description } = req.body;
        const createdProduct = yield prisma.productCategory.create({
            data: {
                name,
                description,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
            },
        });
        res.status(201).json({
            message: "Product category created successfully",
            productCategory: createdProduct,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while creating the product category. Please try again.",
        });
    }
});
exports.registerProductCategory = registerProductCategory;
// Update an existing ProductCategory
const updateProductCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { name, description } = req.body;
        const { id } = req.params;
        const updatedProductCategory = yield prisma.productCategory.update({
            where: { CategoryId: +id },
            data: {
                name,
                description,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
            },
        });
        res.status(200).json({
            message: "Product category updated successfully",
            productCategory: updatedProductCategory,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while updating the product category. Please try again.",
        });
    }
});
exports.updateProductCategory = updateProductCategory;
// Get all ProductCategories
const getAllProductCategories = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productCategories = yield prisma.productCategory.findMany();
        res.status(200).json(productCategories);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while retrieving product categories. Please try again.",
        });
    }
});
exports.getAllProductCategories = getAllProductCategories;
// Get a single ProductCategory by ID
const getProductCategoryById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const productCategory = yield prisma.productCategory.findFirst({
            where: { CategoryId: +id },
        });
        res.status(200).json(productCategory);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while retrieving the product category. Please try again.",
        });
    }
});
exports.getProductCategoryById = getProductCategoryById;
// Delete a ProductCategory by ID
const deleteProductCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedProductCategory = yield prisma.productCategory.delete({
            where: { CategoryId: +id },
        });
        res.status(200).json({
            message: "Product category deleted successfully",
            productCategory: deletedProductCategory,
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "An error occurred while deleting the product category. Please try again.",
        });
    }
});
exports.deleteProductCategory = deleteProductCategory;

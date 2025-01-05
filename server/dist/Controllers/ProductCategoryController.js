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
exports.DeleteproductCategory = exports.getOneproductCategory = exports.allproductCategorys = exports.UpdateproductCategory = exports.RegisterproductCategory = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const RegisterproductCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, CategoryId, description, userUserId, } = req.body;
        const CreateproductCategory = yield prisma.productCategory.create({
            data: {
                name,
                CategoryId,
                description,
                userUserId,
            }
        });
        return res.status(201).json({
            message: "successfully created "
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.RegisterproductCategory = RegisterproductCategory;
const UpdateproductCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, CategoryId, description, userUserId, } = req.body;
        const { id } = req.params;
        const upd = yield prisma.productCategory.update({
            where: {
                CategoryId: +id
            },
            data: {
                name,
                CategoryId,
                description,
                userUserId,
            }
        });
        return res.status(201).json({
            message: "successfully updated "
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.UpdateproductCategory = UpdateproductCategory;
const allproductCategorys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productCategorys = yield prisma.productCategory.findMany();
        return res.status(201).json(productCategorys);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.allproductCategorys = allproductCategorys;
const getOneproductCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const productCategory = yield prisma.productCategory.findFirst({
            where: {
                CategoryId: +id
            }
        });
        return res.status(201).json(productCategory);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.getOneproductCategory = getOneproductCategory;
const DeleteproductCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.productCategory.delete({
            where: {
                CategoryId: +id
            }
        });
        return res.status(201).json(del);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.DeleteproductCategory = DeleteproductCategory;

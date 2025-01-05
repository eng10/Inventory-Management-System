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
exports.Deleteproduct = exports.getOneproduct = exports.allproducts = exports.Updateproduct = exports.Registerproduct = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const Registerproduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, quantity, CategoryId, description, userUserId } = req.body;
        const Createproduct = yield prisma.product.create({
            data: {
                name,
                price,
                quantity,
                CategoryId,
                description,
                userUserId
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
exports.Registerproduct = Registerproduct;
const Updateproduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, price, quantity, CategoryId, description, userUserId } = req.body;
        const { id } = req.params;
        const upd = yield prisma.product.update({
            where: {
                ProductId: +id
            },
            data: {
                name,
                price,
                quantity,
                CategoryId,
                description,
                userUserId
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
exports.Updateproduct = Updateproduct;
const allproducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield prisma.product.findMany();
        return res.status(201).json(products);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.allproducts = allproducts;
const getOneproduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const product = yield prisma.product.findFirst({
            where: {
                ProductId: +id
            }
        });
        return res.status(201).json(product);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.getOneproduct = getOneproduct;
const Deleteproduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.product.delete({
            where: {
                ProductId: +id
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
exports.Deleteproduct = Deleteproduct;

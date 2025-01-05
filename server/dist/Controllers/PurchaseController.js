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
exports.Deletepurchase = exports.getOnepurchase = exports.allpurchases = exports.Updatepurchase = exports.Registerpurchase = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const Registerpurchase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { quantity, totalAmount, ProductId, VendorId, userUserId, } = req.body;
        const Createpurchase = yield prisma.purchase.create({
            data: {
                quantity: +quantity,
                totalAmount: +totalAmount,
                ProductId: +ProductId,
                VendorId: +VendorId,
                userUserId: +userUserId,
            }
        });
        return res.status(201).json({
            message: "successfully created purchase",
            Createpurchase
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.Registerpurchase = Registerpurchase;
const Updatepurchase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { quantity, totalAmount, ProductId, VendorId, userUserId, } = req.body;
        const { id } = req.params;
        const upd = yield prisma.purchase.update({
            where: {
                PurchaseId: +id
            },
            data: {
                quantity: +quantity,
                totalAmount: +totalAmount,
                ProductId: +ProductId,
                VendorId: +VendorId,
                userUserId: +userUserId,
            }
        });
        return res.status(201).json({
            message: "successfully updated this purchase",
            upd
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.Updatepurchase = Updatepurchase;
const allpurchases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchases = yield prisma.purchase.findMany();
        return res.status(201).json(purchases);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.allpurchases = allpurchases;
const getOnepurchase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const purchase = yield prisma.purchase.findFirst({
            where: {
                PurchaseId: +id
            }
        });
        return res.status(201).json(purchase);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.getOnepurchase = getOnepurchase;
const Deletepurchase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.purchase.delete({
            where: {
                PurchaseId: +id
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
exports.Deletepurchase = Deletepurchase;

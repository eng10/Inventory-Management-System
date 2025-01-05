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
// Register a new purchase
const Registerpurchase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { quantity, totalAmount, VendorId, PurchaseStatus = "PENDING", } = req.body;
        const Createpurchase = yield prisma.purchase.create({
            data: {
                quantity: +quantity,
                totalAmount: +totalAmount,
                productProductId: req.body.product,
                VendorId: +VendorId,
                PurchaseStatus,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
            },
        });
        return res.status(201).json({
            message: "Successfully created purchase",
            Createpurchase,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong, please try again",
        });
    }
});
exports.Registerpurchase = Registerpurchase;
// Update a purchase
const Updatepurchase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { quantity, totalAmount, VendorId, PurchaseStatus, } = req.body;
        const { id } = req.params;
        const updatedPurchase = yield prisma.purchase.update({
            where: {
                PurchaseId: +id,
            },
            data: {
                quantity: +quantity,
                totalAmount: +totalAmount,
                productProductId: +req.body.prodectid,
                VendorId: +VendorId,
                PurchaseStatus,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
            },
        });
        return res.status(200).json({
            message: "Successfully updated purchase",
            updatedPurchase,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong, please try again",
        });
    }
});
exports.Updatepurchase = Updatepurchase;
// Fetch all purchases
const allpurchases = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const purchases = yield prisma.purchase.findMany();
        return res.status(200).json(purchases);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong, please try again",
        });
    }
});
exports.allpurchases = allpurchases;
// Fetch a single purchase by ID
const getOnepurchase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const purchase = yield prisma.purchase.findFirst({
            where: {
                PurchaseId: +id,
            },
        });
        if (!purchase) {
            return res.status(404).json({
                message: "Purchase not found",
            });
        }
        return res.status(200).json(purchase);
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong, please try again",
        });
    }
});
exports.getOnepurchase = getOnepurchase;
// Delete a purchase
const Deletepurchase = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedPurchase = yield prisma.purchase.delete({
            where: {
                PurchaseId: +id,
            },
        });
        return res.status(200).json({
            message: "Successfully deleted purchase",
            deletedPurchase,
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            message: "Something went wrong, please try again",
        });
    }
});
exports.Deletepurchase = Deletepurchase;

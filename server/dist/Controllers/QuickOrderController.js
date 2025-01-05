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
exports.DeletequickOrder = exports.getOnequickOrder = exports.allquickOrders = exports.UpdatequickOrder = exports.RegisterquickOrder = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const RegisterquickOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { quantity, totalPrice, CustomerId, ProductId, QuickOrderId, userUserId, } = req.body;
        const CreatequickOrder = yield prisma.quickOrder.create({
            data: {
                quantity: +quantity,
                totalPrice: +totalPrice,
                CustomerId: +CustomerId,
                ProductId: +ProductId,
                QuickOrderId: +QuickOrderId,
                userUserId: +userUserId,
            }
        });
        return res.status(201).json({
            message: "successfully created quickOrder",
            CreatequickOrder
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.RegisterquickOrder = RegisterquickOrder;
const UpdatequickOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { quantity, totalPrice, CustomerId, ProductId, QuickOrderId, userUserId, } = req.body;
        const { id } = req.params;
        const upd = yield prisma.quickOrder.update({
            where: {
                QuickOrderId: +id
            },
            data: {
                quantity: +quantity,
                totalPrice: +totalPrice,
                CustomerId: +CustomerId,
                ProductId: +ProductId,
                QuickOrderId: +QuickOrderId,
                userUserId: +userUserId,
            }
        });
        return res.status(201).json({
            message: "successfully updated this quickOrder",
            upd
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.UpdatequickOrder = UpdatequickOrder;
const allquickOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const quickOrders = yield prisma.quickOrder.findMany();
        return res.status(201).json(quickOrders);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.allquickOrders = allquickOrders;
const getOnequickOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const quickOrder = yield prisma.quickOrder.findFirst({
            where: {
                QuickOrderId: +id
            }
        });
        return res.status(201).json(quickOrder);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.getOnequickOrder = getOnequickOrder;
const DeletequickOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.quickOrder.delete({
            where: {
                QuickOrderId: +id
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
exports.DeletequickOrder = DeletequickOrder;

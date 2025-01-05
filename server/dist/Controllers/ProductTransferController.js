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
exports.DeleteproductTransfer = exports.getOneproductTransfer = exports.allproductTransfers = exports.UpdateproductTransfer = exports.RegisterproductTransfer = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const RegisterproductTransfer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { quantity, FromBranchId, ProductId, ToBranchId, userUserId, TransferId, } = req.body;
        const CreateproductTransfer = yield prisma.productTransfer.create({
            data: {
                quantity: +quantity,
                FromBranchId: +FromBranchId,
                ProductId: +ProductId,
                ToBranchId: +ToBranchId,
                userUserId: +userUserId,
                TransferId: +TransferId,
            },
        });
        return res.status(201).json({
            message: "successfully created productTransfer",
            CreateproductTransfer,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.RegisterproductTransfer = RegisterproductTransfer;
const UpdateproductTransfer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { quantity, FromBranchId, ProductId, ToBranchId, userUserId, TransferId, } = req.body;
        const { id } = req.params;
        const upd = yield prisma.productTransfer.update({
            where: {
                TransferId: +id,
            },
            data: {
                quantity: +quantity,
                FromBranchId: +FromBranchId,
                ProductId: +ProductId,
                ToBranchId: +ToBranchId,
                userUserId: +userUserId,
                TransferId: +TransferId,
            },
        });
        return res.status(201).json({
            message: "successfully updated this productTransfer",
            upd,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.UpdateproductTransfer = UpdateproductTransfer;
const allproductTransfers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productTransfers = yield prisma.productTransfer.findMany();
        return res.status(201).json(productTransfers);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.allproductTransfers = allproductTransfers;
const getOneproductTransfer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const productTransfer = yield prisma.productTransfer.findFirst({
            where: {
                TransferId: +id,
            },
        });
        return res.status(201).json(productTransfer);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.getOneproductTransfer = getOneproductTransfer;
const DeleteproductTransfer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.productTransfer.delete({
            where: {
                TransferId: +id,
            },
        });
        return res.status(201).json(del);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.DeleteproductTransfer = DeleteproductTransfer;

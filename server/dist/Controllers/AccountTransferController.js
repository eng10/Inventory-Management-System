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
exports.DeleteaccountTransfer = exports.getOneaccountTransfer = exports.allaccountTransfers = exports.UpdateaccountTransfer = exports.RegisteraccountTransfer = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const RegisteraccountTransfer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { amount, type, ToAccountId, FromAccountId } = req.body;
        const CreateaccountTransfer = yield prisma.accountTransfer.create({
            data: {
                amount: +amount,
                type,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
                ToAccountId: +ToAccountId,
                FromAccountId: +FromAccountId,
            },
        });
        res.status(201).json({
            message: "successfully created accountTransfer",
            CreateaccountTransfer,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.RegisteraccountTransfer = RegisteraccountTransfer;
const UpdateaccountTransfer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { amount, type, ToAccountId, FromAccountId } = req.body;
        const { id } = req.params;
        const upd = yield prisma.accountTransfer.update({
            where: {
                TransferId: +id,
            },
            data: {
                amount: +amount,
                type,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
                ToAccountId: +ToAccountId,
                FromAccountId: +FromAccountId,
            },
        });
        res.status(201).json({
            message: "successfully updated this accountTransfer",
            upd,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.UpdateaccountTransfer = UpdateaccountTransfer;
const allaccountTransfers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accountTransfers = yield prisma.accountTransfer.findMany();
        res.status(201).json(accountTransfers);
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.allaccountTransfers = allaccountTransfers;
const getOneaccountTransfer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const accountTransfer = yield prisma.accountTransfer.findFirst({
            where: {
                TransferId: +id,
            },
        });
        res.status(201).json(accountTransfer);
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.getOneaccountTransfer = getOneaccountTransfer;
const DeleteaccountTransfer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.accountTransfer.delete({
            where: {
                TransferId: +id,
            },
        });
        res.status(201).json(del);
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.DeleteaccountTransfer = DeleteaccountTransfer;

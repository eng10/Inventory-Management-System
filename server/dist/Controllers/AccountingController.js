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
exports.Deleteaccounting = exports.getOneaccounting = exports.allaccountings = exports.Updateaccounting = exports.Registeraccounting = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const Registeraccounting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { accountName, accountType } = req.body;
        const Createaccounting = yield prisma.accounting.create({
            data: {
                accountName,
                accountType,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
            },
        });
        res.status(201).json({
            message: "successfully created accounting",
            Createaccounting,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.Registeraccounting = Registeraccounting;
const Updateaccounting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { accountName, accountType } = req.body;
        const { id } = req.params;
        const upd = yield prisma.accounting.update({
            where: {
                AccountingId: +id,
            },
            data: {
                accountName,
                accountType,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
            },
        });
        res.status(200).json({
            message: "successfully updated this accounting",
            upd,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.Updateaccounting = Updateaccounting;
const allaccountings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accountings = yield prisma.accounting.findMany();
        res.status(200).json(accountings);
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.allaccountings = allaccountings;
const getOneaccounting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const accounting = yield prisma.accounting.findFirst({
            where: {
                AccountingId: +id,
            },
        });
        res.status(200).json(accounting);
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.getOneaccounting = getOneaccounting;
const Deleteaccounting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.accounting.delete({
            where: {
                AccountingId: +id,
            },
        });
        res.status(200).json(del);
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.Deleteaccounting = Deleteaccounting;

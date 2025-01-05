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
    try {
        const { accountName, accountType, userUserId, } = req.body;
        const Createaccounting = yield prisma.accounting.create({
            data: {
                accountName,
                accountType,
                userUserId: +userUserId,
            }
        });
        return res.status(201).json({
            message: "successfully created accounting",
            Createaccounting
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.Registeraccounting = Registeraccounting;
const Updateaccounting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { accountName, accountType, userUserId, } = req.body;
        const { id } = req.params;
        const upd = yield prisma.accounting.update({
            where: {
                AccountingId: +id
            },
            data: {
                accountName,
                accountType,
                userUserId: +userUserId,
            }
        });
        return res.status(201).json({
            message: "successfully updated this accounting",
            upd
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.Updateaccounting = Updateaccounting;
const allaccountings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const accountings = yield prisma.accounting.findMany();
        return res.status(201).json(accountings);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.allaccountings = allaccountings;
const getOneaccounting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const accounting = yield prisma.accounting.findFirst({
            where: {
                AccountingId: +id
            }
        });
        return res.status(201).json(accounting);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.getOneaccounting = getOneaccounting;
const Deleteaccounting = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.accounting.delete({
            where: {
                AccountingId: +id
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
exports.Deleteaccounting = Deleteaccounting;

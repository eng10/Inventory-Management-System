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
exports.Deleteexpense = exports.getOneexpense = exports.allexpenses = exports.Updateexpense = exports.Registerexpense = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const Registerexpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { amount, description } = req.body.Expenseinterface;
        const Createexpense = yield prisma.expense.create({
            data: {
                amount: +amount,
                description,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
            },
        });
        return res.status(201).json({
            message: "successfully created expense",
            Createexpense,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.Registerexpense = Registerexpense;
const Updateexpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { amount, description } = req.body;
        const { id } = req.params;
        const upd = yield prisma.expense.update({
            where: {
                ExpenseId: +id,
            },
            data: {
                amount: +amount,
                description,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
            },
        });
        return res.status(201).json({
            message: "successfully updated this expense",
            upd,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.Updateexpense = Updateexpense;
const allexpenses = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const expenses = yield prisma.expense.findMany();
        return res.status(201).json(expenses);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.allexpenses = allexpenses;
const getOneexpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const expense = yield prisma.expense.findFirst({
            where: {
                ExpenseId: +id,
            },
        });
        return res.status(201).json(expense);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.getOneexpense = getOneexpense;
const Deleteexpense = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.expense.delete({
            where: {
                ExpenseId: +id,
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
exports.Deleteexpense = Deleteexpense;

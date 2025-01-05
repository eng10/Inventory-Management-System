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
exports.Deletesale = exports.getOnesale = exports.allsales = exports.Updatesale = exports.Registersale = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const Registersale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { quantity, totalAmount, CustomerId, ProductId } = req.body;
        const Createsale = yield prisma.sale.create({
            data: {
                quantity: +quantity,
                totalAmount: +totalAmount,
                CustomerId: +CustomerId,
                ProductId: +ProductId,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
            },
        });
        return res.status(201).json(Object.assign({ message: "successfully created " }, Createsale));
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.Registersale = Registersale;
const Updatesale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { quantity, totalAmount, CustomerId, ProductId, userUserId } = req.body;
        const { id } = req.params;
        const upd = yield prisma.sale.update({
            where: {
                SaleId: +id,
            },
            data: {
                quantity: +quantity,
                totalAmount: +totalAmount,
                CustomerId: +CustomerId,
                ProductId: +ProductId,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
            },
        });
        return res.status(201).json({
            message: "successfully updated ",
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.Updatesale = Updatesale;
const allsales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sales = yield prisma.sale.findMany();
        return res.status(201).json(sales);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.allsales = allsales;
const getOnesale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const sale = yield prisma.sale.findFirst({
            where: {
                SaleId: +id,
            },
        });
        return res.status(201).json(sale);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.getOnesale = getOnesale;
const Deletesale = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.sale.delete({
            where: {
                SaleId: +id,
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
exports.Deletesale = Deletesale;

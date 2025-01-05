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
exports.Deletecustomer = exports.getOnecustomer = exports.allcustomers = exports.Updatecustomer = exports.Registercustomer = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const Registercustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address, email, phone, name, userUserId, } = req.body;
        const Createcustomer = yield prisma.customer.create({
            data: {
                address,
                email,
                phone,
                name,
                userUserId: +userUserId,
            }
        });
        return res.status(201).json({
            message: "successfully created customer",
            Createcustomer
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.Registercustomer = Registercustomer;
const Updatecustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address, email, phone, name, userUserId, } = req.body;
        const { id } = req.params;
        const upd = yield prisma.customer.update({
            where: {
                CustomerId: +id
            },
            data: {
                address,
                email,
                phone,
                name,
                userUserId: +userUserId,
            }
        });
        return res.status(201).json({
            message: "successfully updated this customer",
            upd
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.Updatecustomer = Updatecustomer;
const allcustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield prisma.customer.findMany();
        return res.status(201).json(customers);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.allcustomers = allcustomers;
const getOnecustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const customer = yield prisma.customer.findFirst({
            where: {
                CustomerId: +id
            }
        });
        return res.status(201).json(customer);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.getOnecustomer = getOnecustomer;
const Deletecustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.customer.delete({
            where: {
                CustomerId: +id
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
exports.Deletecustomer = Deletecustomer;

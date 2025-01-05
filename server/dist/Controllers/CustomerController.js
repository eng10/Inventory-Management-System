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
// Register a new customer
const Registercustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { address, email, phone, name } = req.body;
        if (!name) {
            return res.status(400).json({
                message: "Please provide all required fields.",
                isSuccess: false,
            });
        }
        const newCustomer = yield prisma.customer.create({
            data: {
                address,
                email,
                phone,
                name,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
            },
        });
        return res.status(201).json({
            message: "Customer created successfully.",
            newCustomer,
        });
    }
    catch (error) {
        console.error("Error registering customer:", error);
        return res.status(500).json({
            message: "Something went wrong. Please try again.",
            isSuccess: false,
        });
    }
});
exports.Registercustomer = Registercustomer;
// Update an existing customer
const Updatecustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { address, email, phone, name } = req.body;
        const { id } = req.params;
        if (!address || !email || !phone || !name) {
            return res.status(400).json({
                message: "Please provide all required fields.",
                isSuccess: false,
            });
        }
        const updatedCustomer = yield prisma.customer.update({
            where: { CustomerId: +id },
            data: {
                address,
                email,
                phone,
                name,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
            },
        });
        return res.status(200).json({
            message: "Customer updated successfully.",
            updatedCustomer,
        });
    }
    catch (error) {
        console.error("Error updating customer:", error);
        return res.status(500).json({
            message: "Something went wrong. Please try again.",
            isSuccess: false,
        });
    }
});
exports.Updatecustomer = Updatecustomer;
// Retrieve all customers
const allcustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield prisma.customer.findMany();
        return res.status(200).json(customers);
    }
    catch (error) {
        console.error("Error fetching customers:", error);
        return res.status(500).json({
            message: "Something went wrong. Please try again.",
            isSuccess: false,
        });
    }
});
exports.allcustomers = allcustomers;
// Retrieve a single customer by ID
const getOnecustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const customer = yield prisma.customer.findFirst({
            where: { CustomerId: +id },
        });
        if (!customer) {
            return res.status(404).json({
                message: `Customer with ID ${id} not found.`,
                isSuccess: false,
            });
        }
        return res.status(200).json(customer);
    }
    catch (error) {
        console.error("Error fetching customer:", error);
        return res.status(500).json({
            message: "Something went wrong. Please try again.",
            isSuccess: false,
        });
    }
});
exports.getOnecustomer = getOnecustomer;
// Delete a customer
const Deletecustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedCustomer = yield prisma.customer.delete({
            where: { CustomerId: +id },
        });
        return res.status(200).json({
            message: "Customer deleted successfully.",
            deletedCustomer,
        });
    }
    catch (error) {
        console.error("Error deleting customer:", error);
        return res.status(500).json({
            message: "Something went wrong. Please try again.",
            isSuccess: false,
        });
    }
});
exports.Deletecustomer = Deletecustomer;

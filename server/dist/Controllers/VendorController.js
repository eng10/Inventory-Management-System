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
exports.DeleteVendor = exports.getOneVendor = exports.allVendors = exports.UpdateVendor = exports.RegisterVendor = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const RegisterVendor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, contactInfo, email, userUserId } = req.body;
        const CreateVendor = yield prisma.vendor.create({
            data: {
                name,
                contactInfo,
                email,
                userUserId
            }
        });
        return res.status(201).json({
            message: "successfully created vendor",
            CreateVendor
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.RegisterVendor = RegisterVendor;
const UpdateVendor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, contactInfo, email, userUserId } = req.body;
        const { id } = req.params;
        const upd = yield prisma.vendor.update({
            where: {
                VendorId: +id
            },
            data: {
                name,
                contactInfo,
                email,
                userUserId: +userUserId
            }
        });
        return res.status(201).json({
            message: "successfully updated this vendor",
            upd
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.UpdateVendor = UpdateVendor;
const allVendors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const Vendors = yield prisma.vendor.findMany();
        return res.status(201).json(Vendors);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.allVendors = allVendors;
const getOneVendor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const vendor = yield prisma.vendor.findFirst({
            where: {
                VendorId: +id
            }
        });
        return res.status(201).json(vendor);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.getOneVendor = getOneVendor;
const DeleteVendor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.vendor.delete({
            where: {
                VendorId: +id
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
exports.DeleteVendor = DeleteVendor;

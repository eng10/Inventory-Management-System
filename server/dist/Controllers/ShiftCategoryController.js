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
exports.DeleteshiftCategory = exports.getOneshiftCategory = exports.allshiftCategorys = exports.UpdateshiftCategory = exports.RegistershiftCategory = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const RegistershiftCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, } = req.body;
        const CreateshiftCategory = yield prisma.shiftCategory.create({
            data: {
                name,
            }
        });
        return res.status(201).json({
            message: "successfully created shiftCategory",
            CreateshiftCategory
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.RegistershiftCategory = RegistershiftCategory;
const UpdateshiftCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, } = req.body;
        const { id } = req.params;
        const upd = yield prisma.shiftCategory.update({
            where: {
                ShiftCategoryId: +id
            },
            data: {
                name,
            }
        });
        return res.status(201).json({
            message: "successfully updated this shiftCategory",
            upd
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.UpdateshiftCategory = UpdateshiftCategory;
const allshiftCategorys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shiftCategorys = yield prisma.shiftCategory.findMany();
        return res.status(201).json(shiftCategorys);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.allshiftCategorys = allshiftCategorys;
const getOneshiftCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const shiftCategory = yield prisma.shiftCategory.findFirst({
            where: {
                ShiftCategoryId: +id
            }
        });
        return res.status(201).json(shiftCategory);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.getOneshiftCategory = getOneshiftCategory;
const DeleteshiftCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.shiftCategory.delete({
            where: {
                ShiftCategoryId: +id
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
exports.DeleteshiftCategory = DeleteshiftCategory;

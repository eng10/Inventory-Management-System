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
exports.DeleteworkShift = exports.getOneworkShift = exports.allworkShifts = exports.UpdateworkShift = exports.RegisterworkShift = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const RegisterworkShift = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, ShiftCategoryId } = req.body;
        const CreateworkShift = yield prisma.workShift.create({
            data: {
                name,
                ShiftCategoryId: +ShiftCategoryId,
            },
        });
        return res.status(201).json({
            message: "successfully created workShift",
            CreateworkShift,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.RegisterworkShift = RegisterworkShift;
const UpdateworkShift = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, ShiftCategoryId } = req.body;
        const { id } = req.params;
        const upd = yield prisma.workShift.update({
            where: {
                WorkShiftId: +id,
            },
            data: {
                name,
                ShiftCategoryId: +ShiftCategoryId,
            },
        });
        return res.status(201).json({
            message: "successfully updated this workShift",
            upd,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.UpdateworkShift = UpdateworkShift;
const allworkShifts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workShifts = yield prisma.workShift.findMany();
        return res.status(201).json(workShifts);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.allworkShifts = allworkShifts;
const getOneworkShift = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const workShift = yield prisma.workShift.findFirst({
            where: {
                WorkShiftId: +id,
            },
        });
        return res.status(201).json(workShift);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.getOneworkShift = getOneworkShift;
const DeleteworkShift = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.workShift.delete({
            where: {
                WorkShiftId: +id,
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
exports.DeleteworkShift = DeleteworkShift;

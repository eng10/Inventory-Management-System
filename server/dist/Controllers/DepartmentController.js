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
exports.Deletedepartment = exports.getOnedepartment = exports.alldepartments = exports.Updatedepartment = exports.Registerdepartment = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const Registerdepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { name } = req.body;
        const Createdepartment = yield prisma.department.create({
            data: {
                name,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
            },
        });
        return res.status(201).json({
            message: "successfully created department",
            Createdepartment,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.Registerdepartment = Registerdepartment;
// azupdate
const Updatedepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const upd = yield prisma.department.update({
            where: {
                DepartmentId: +id,
            },
            data: {
                name,
            },
        });
        return res.status(201).json({
            message: "successfully updated this department",
            upd,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.Updatedepartment = Updatedepartment;
const alldepartments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const departments = yield prisma.department.findMany();
        return res.status(201).json(departments);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.alldepartments = alldepartments;
const getOnedepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const department = yield prisma.department.findFirst({
            where: {
                DepartmentId: +id,
            },
        });
        return res.status(201).json(department);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.getOnedepartment = getOnedepartment;
const Deletedepartment = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.department.delete({
            where: {
                DepartmentId: +id,
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
exports.Deletedepartment = Deletedepartment;

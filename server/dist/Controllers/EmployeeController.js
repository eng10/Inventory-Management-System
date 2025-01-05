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
exports.Deletedeemaployee = exports.getOnedeemaployee = exports.alldeemaployees = exports.Updatedeemaployee = exports.Registerdeemaployee = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const Registerdeemaployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, BranchId, DepartmentId, userUserId, } = req.body;
        const Createdeemaployee = yield prisma.employee.create({
            data: {
                name,
                BranchId: +BranchId,
                DepartmentId: +DepartmentId,
                userUserId: +userUserId,
            }
        });
        return res.status(201).json({
            message: "successfully created employee",
            Createdeemaployee
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.Registerdeemaployee = Registerdeemaployee;
const Updatedeemaployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, BranchId, DepartmentId, userUserId, } = req.body;
        const { id } = req.params;
        const upd = yield prisma.employee.update({
            where: {
                EmployeeId: +id
            },
            data: {
                name,
                BranchId: +BranchId,
                DepartmentId: +DepartmentId,
                userUserId: +userUserId,
            }
        });
        return res.status(201).json({
            message: "successfully updated this employee",
            upd
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.Updatedeemaployee = Updatedeemaployee;
const alldeemaployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deemaployees = yield prisma.employee.findMany();
        return res.status(201).json(deemaployees);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.alldeemaployees = alldeemaployees;
const getOnedeemaployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const employee = yield prisma.employee.findFirst({
            where: {
                EmployeeId: +id
            }
        });
        return res.status(201).json(employee);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.getOnedeemaployee = getOnedeemaployee;
const Deletedeemaployee = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.employee.delete({
            where: {
                EmployeeId: +id
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
exports.Deletedeemaployee = Deletedeemaployee;

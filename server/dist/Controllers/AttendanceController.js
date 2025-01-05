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
exports.Deleteattendance = exports.getOneattendance = exports.allattendances = exports.Updateattendance = exports.Registerattendance = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const Registerattendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, status, employeeEmployeeId } = req.body;
        const Createattendance = yield prisma.attendance.create({
            data: {
                date,
                status,
                employeeEmployeeId: +employeeEmployeeId,
            },
        });
        res.status(201).json({
            message: "successfully created attendance",
            Createattendance,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.Registerattendance = Registerattendance;
const Updateattendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { date, status, employeeEmployeeId } = req.body;
        const { id } = req.params;
        const upd = yield prisma.attendance.update({
            where: {
                AttendanceId: +id,
            },
            data: {
                date,
                status,
                employeeEmployeeId: +employeeEmployeeId,
            },
        });
        res.status(201).json({
            message: "successfully updated this attendance",
            upd,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.Updateattendance = Updateattendance;
const allattendances = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const attendances = yield prisma.attendance.findMany();
        res.status(201).json(attendances);
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.allattendances = allattendances;
const getOneattendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const attendance = yield prisma.attendance.findFirst({
            where: {
                AttendanceId: +id,
            },
        });
        res.status(201).json(attendance);
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.getOneattendance = getOneattendance;
const Deleteattendance = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.attendance.delete({
            where: {
                AttendanceId: +id,
            },
        });
        res.status(201).json(del);
    }
    catch (error) {
        res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.Deleteattendance = Deleteattendance;

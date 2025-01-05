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
exports.Deletebranch = exports.getOnebranch = exports.allbranchs = exports.Updatebranch = exports.Registerbranch = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const Registerbranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address, userUserId, name, } = req.body;
        const Createbranch = yield prisma.branch.create({
            data: {
                address,
                userUserId: +userUserId,
                name,
            }
        });
        return res.status(201).json({
            message: "successfully created "
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.Registerbranch = Registerbranch;
const Updatebranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address, userUserId, name, } = req.body;
        const { id } = req.params;
        const upd = yield prisma.branch.update({
            where: {
                BranchId: +id
            },
            data: {
                address,
                userUserId: +userUserId,
                name,
            }
        });
        return res.status(201).json({
            message: "successfully updated "
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.Updatebranch = Updatebranch;
const allbranchs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const branchs = yield prisma.branch.findMany();
        return res.status(201).json(branchs);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.allbranchs = allbranchs;
const getOnebranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const branch = yield prisma.branch.findFirst({
            where: {
                BranchId: +id
            }
        });
        return res.status(201).json(branch);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.getOnebranch = getOnebranch;
const Deletebranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.branch.delete({
            where: {
                BranchId: +id
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
exports.Deletebranch = Deletebranch;

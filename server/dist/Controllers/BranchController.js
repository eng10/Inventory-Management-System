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
    var _a;
    try {
        const { address, name } = req.body;
        const Createbranch = yield prisma.branch.create({
            data: {
                address,
                name,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
            },
        });
        res.status(201).json({
            data: Createbranch,
            message: "Branch successfully created.",
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong. Please try again.",
        });
    }
});
exports.Registerbranch = Registerbranch;
// Update Branch
const Updatebranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address, name } = req.body;
        const { id } = req.params;
        if (!req.user || req.user.UserId === undefined) {
            res.status(400).json({ message: "User ID is required." });
            return;
        }
        const updatedBranch = yield prisma.branch.update({
            where: {
                BranchId: +id,
            },
            data: {
                address,
                name,
                userUserId: req.user.UserId,
            },
        });
        res.status(200).json({
            data: updatedBranch,
            message: "Branch successfully updated.",
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong. Please try again.",
        });
    }
});
exports.Updatebranch = Updatebranch;
// Get All Branches
const allbranchs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const branches = yield prisma.branch.findMany();
        res.status(200).json(branches);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong. Please try again.",
        });
    }
});
exports.allbranchs = allbranchs;
// Get One Branch
const getOnebranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const branch = yield prisma.branch.findFirst({
            where: {
                BranchId: +id,
            },
        });
        if (!branch) {
            res.status(404).json({
                message: "Branch not found.",
            });
            return;
        }
        res.status(200).json(branch);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong. Please try again.",
        });
    }
});
exports.getOnebranch = getOnebranch;
// Delete Branch
const Deletebranch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const deletedBranch = yield prisma.branch.delete({
            where: {
                BranchId: +id,
            },
        });
        res.status(200).json({
            data: deletedBranch,
            message: "Branch successfully deleted.",
        });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Something went wrong. Please try again.",
        });
    }
});
exports.Deletebranch = Deletebranch;

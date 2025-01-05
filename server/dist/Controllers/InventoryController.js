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
exports.Deleteinventory = exports.getOneinventory = exports.allinventorys = exports.Updateinventory = exports.Registerinventory = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const Registerinventory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const { name, BranchId, userUserId, description } = req.body;
        const Createinventory = yield prisma.inventory.create({
            data: {
                name,
                BranchId: +BranchId,
                userUserId: (_a = req.user) === null || _a === void 0 ? void 0 : _a.UserId,
                description,
            },
        });
        return res.status(201).json({
            message: "successfully created ",
            Createinventory
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.Registerinventory = Registerinventory;
// \\
const Updateinventory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, BranchId, userUserId, description } = req.body;
        const { id } = req.params;
        const upd = yield prisma.inventory.update({
            where: {
                InventoryId: +id,
            },
            data: {
                name,
                BranchId: +BranchId,
                userUserId: +userUserId,
                description,
            },
        });
        return res.status(201).json({
            message: "successfully updated ",
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.Updateinventory = Updateinventory;
const allinventorys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const inventorys = yield prisma.inventory.findMany();
        return res.status(201).json(inventorys);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.allinventorys = allinventorys;
const getOneinventory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const inventory = yield prisma.inventory.findFirst({
            where: {
                InventoryId: +id,
            },
        });
        return res.status(201).json(inventory);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again",
        });
    }
});
exports.getOneinventory = getOneinventory;
const Deleteinventory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.inventory.delete({
            where: {
                InventoryId: +id,
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
exports.Deleteinventory = Deleteinventory;

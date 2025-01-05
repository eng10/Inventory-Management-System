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
exports.DeletegeneralJournal = exports.getOnegeneralJournal = exports.allgeneralJournals = exports.UpdategeneralJournal = exports.RegistergeneralJournal = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const RegistergeneralJournal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { description, userUserId } = req.body;
        const CreategeneralJournal = yield prisma.generalJournal.create({
            data: {
                description,
                userUserId: +userUserId,
            }
        });
        return res.status(201).json({
            message: "successfully created generalJournal",
            CreategeneralJournal
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.RegistergeneralJournal = RegistergeneralJournal;
const UpdategeneralJournal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userUserId, description } = req.body;
        const { id } = req.params;
        const upd = yield prisma.generalJournal.update({
            where: {
                GeneralJournalId: +id
            },
            data: {
                description,
                userUserId: +userUserId
            }
        });
        return res.status(201).json({
            message: "successfully updated this generalJournal",
            upd
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.UpdategeneralJournal = UpdategeneralJournal;
const allgeneralJournals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const generalJournals = yield prisma.generalJournal.findMany();
        return res.status(201).json(generalJournals);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.allgeneralJournals = allgeneralJournals;
const getOnegeneralJournal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const generalJournal = yield prisma.generalJournal.findFirst({
            where: {
                GeneralJournalId: +id
            }
        });
        return res.status(201).json(generalJournal);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.getOnegeneralJournal = getOnegeneralJournal;
const DeletegeneralJournal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.generalJournal.delete({
            where: {
                GeneralJournalId: +id
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
exports.DeletegeneralJournal = DeletegeneralJournal;

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
exports.DeletejournalEntry = exports.getOnejournalEntry = exports.alljournalEntrys = exports.UpdatejournalEntry = exports.RegisterjournalEntry = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const RegisterjournalEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, description, AccountId, userUserId, generalJournalGeneralJournalId, } = req.body;
        const CreatejournalEntry = yield prisma.journalEntry.create({
            data: {
                amount: +amount,
                description,
                AccountId: +AccountId,
                userUserId: +userUserId,
                generalJournalGeneralJournalId: +generalJournalGeneralJournalId,
            }
        });
        return res.status(201).json({
            message: "successfully created journalEntry",
            CreatejournalEntry
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.RegisterjournalEntry = RegisterjournalEntry;
const UpdatejournalEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, description, AccountId, userUserId, generalJournalGeneralJournalId, } = req.body;
        const { id } = req.params;
        const upd = yield prisma.journalEntry.update({
            where: {
                JournalEntryId: +id
            },
            data: {
                amount: +amount,
                description,
                AccountId: +AccountId,
                userUserId: +userUserId,
                generalJournalGeneralJournalId: +generalJournalGeneralJournalId,
            }
        });
        return res.status(201).json({
            message: "successfully updated this journalEntry",
            upd
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.UpdatejournalEntry = UpdatejournalEntry;
const alljournalEntrys = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const journalEntrys = yield prisma.journalEntry.findMany();
        return res.status(201).json(journalEntrys);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.alljournalEntrys = alljournalEntrys;
const getOnejournalEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const journalEntry = yield prisma.journalEntry.findFirst({
            where: {
                JournalEntryId: +id
            }
        });
        return res.status(201).json(journalEntry);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.getOnejournalEntry = getOnejournalEntry;
const DeletejournalEntry = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.journalEntry.delete({
            where: {
                JournalEntryId: +id
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
exports.DeletejournalEntry = DeletejournalEntry;

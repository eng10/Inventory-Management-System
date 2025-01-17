"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const JournalEntryController_1 = require("../Controllers/JournalEntryController");
const JournalEntryRouter = (0, express_1.Router)();
JournalEntryRouter.post("/register", JournalEntryController_1.RegisterjournalEntry);
JournalEntryRouter.put("/update/:id", JournalEntryController_1.UpdatejournalEntry);
JournalEntryRouter.delete("/delete/:id", JournalEntryController_1.DeletejournalEntry);
JournalEntryRouter.get("/:id", JournalEntryController_1.getOnejournalEntry);
JournalEntryRouter.get("/all", JournalEntryController_1.alljournalEntrys);
exports.default = JournalEntryRouter;

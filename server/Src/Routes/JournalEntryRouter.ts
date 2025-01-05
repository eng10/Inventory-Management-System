import { Router } from "express";
import {
  DeletejournalEntry,
  RegisterjournalEntry,
  UpdatejournalEntry,
  alljournalEntrys,
  getOnejournalEntry,
} from "../Controllers/JournalEntryController";
const JournalEntryRouter = Router();
JournalEntryRouter.post("/register", RegisterjournalEntry);
JournalEntryRouter.put("/update/:id", UpdatejournalEntry);
JournalEntryRouter.delete("/delete/:id", DeletejournalEntry);
JournalEntryRouter.get("/:id", getOnejournalEntry);
JournalEntryRouter.get("/all", alljournalEntrys);
export default JournalEntryRouter;

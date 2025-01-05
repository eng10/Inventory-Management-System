import { Router } from "express";
import {
  DeletegeneralJournal,
  RegistergeneralJournal,
  UpdategeneralJournal,
  allgeneralJournals,
  getOnegeneralJournal,
} from "../Controllers/GeneralJournalController";
const GeneralJournalRouter = Router();
GeneralJournalRouter.post("/register", RegistergeneralJournal);
GeneralJournalRouter.put("/update/:id", UpdategeneralJournal);
GeneralJournalRouter.delete("/delete/:id", DeletegeneralJournal);
GeneralJournalRouter.get("/:id", getOnegeneralJournal);
GeneralJournalRouter.get("/all", allgeneralJournals);
export default GeneralJournalRouter;

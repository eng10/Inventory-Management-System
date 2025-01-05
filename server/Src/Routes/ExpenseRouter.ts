import { Router } from "express";
import {
  allexpenses,
  Deleteexpense,
  getOneexpense,
  Registerexpense,
  Updateexpense,
} from "../Controllers/ExpenseController";
import { decodeToken } from "../helpers/secure/jwt";
const router = Router();

router.post("/new", Registerexpense);
router.put("/update/:id", Updateexpense);
router.delete("/delete/:id", Deleteexpense);
router.get("/:id", getOneexpense);
router.get("/all", allexpenses);

export default router;

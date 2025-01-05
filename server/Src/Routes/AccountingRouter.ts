import { Router } from "express";
import {
  Deleteaccounting,
  Registeraccounting,
  Updateaccounting,
  allaccountings,
  getOneaccounting,
} from "../Controllers/AccountingController";
const AccountingRouter = Router();
AccountingRouter.post("/register", Registeraccounting);
AccountingRouter.put("/update/:id", Updateaccounting);
AccountingRouter.delete("/delete/:id", Deleteaccounting);
AccountingRouter.get("/:id", getOneaccounting);
AccountingRouter.get("/all", allaccountings);
export default AccountingRouter;

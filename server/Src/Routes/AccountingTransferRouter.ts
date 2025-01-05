import { Router } from "express";
import {
  DeleteaccountTransfer,
  RegisteraccountTransfer,
  UpdateaccountTransfer,
  allaccountTransfers,
  getOneaccountTransfer,
} from "../Controllers/AccountTransferController";
const AccountingTransferRouter = Router();
AccountingTransferRouter.post("/register", RegisteraccountTransfer);
AccountingTransferRouter.put("/update/:id", UpdateaccountTransfer);
AccountingTransferRouter.delete("/delete/:id", DeleteaccountTransfer);
AccountingTransferRouter.get("One/:id", getOneaccountTransfer);
AccountingTransferRouter.get("/all", allaccountTransfers);
export default AccountingTransferRouter;

import { Router } from "express";
import {
  Deletepurchase,
  Registerpurchase,
  Updatepurchase,
  allpurchases,
  getOnepurchase,
} from "../Controllers/PurchaseController";
import { decodeToken } from "../helpers/secure/jwt";

const PurchaseRouter = Router();
PurchaseRouter.post("/register", decodeToken, Registerpurchase);
PurchaseRouter.put("/update/:id", Updatepurchase);
PurchaseRouter.delete("/delete/:id", Deletepurchase);
PurchaseRouter.get("/:id", getOnepurchase);
PurchaseRouter.get("/all", allpurchases);

export default PurchaseRouter;

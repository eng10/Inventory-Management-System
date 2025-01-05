import { Router } from "express";
import {
  Deletesale,
  Registersale,
  Updatesale,
} from "../Controllers/SaleController";
import { decodeToken } from "../helpers/secure/jwt";
const SaleRouter = Router();
SaleRouter.post("/register", decodeToken, Registersale);
SaleRouter.put("/update/:id", Updatesale);
SaleRouter.delete("/delete/:id", Deletesale);
// SaleRouter.get("/:id", getOnesale);
// SaleRouter.get("/all", allsales);
export default SaleRouter;

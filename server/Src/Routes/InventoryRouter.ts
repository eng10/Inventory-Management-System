import { Router } from "express";
import {
  Deleteinventory,
  Registerinventory,
  Updateinventory,
  allinventorys,
  getOneinventory,
} from "../Controllers/InventoryController";
import { decodeToken } from "../helpers/secure/jwt";
const InventoryRouter = Router();
InventoryRouter.post("/register", decodeToken, Registerinventory);
InventoryRouter.put("/update/:id", Updateinventory);
InventoryRouter.delete("/delete/:id", Deleteinventory);
InventoryRouter.get("/:id", getOneinventory);
InventoryRouter.get("/all", allinventorys);
export default InventoryRouter;

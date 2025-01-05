import { Router } from "express";
import {
  DeletequickOrder,
  RegisterquickOrder,
  UpdatequickOrder,
  allquickOrders,
  getOnequickOrder,
} from "../Controllers/QuickOrderController";
const QuickOrderRouter = Router();
QuickOrderRouter.post("/register", RegisterquickOrder);
QuickOrderRouter.put("/update/:id", UpdatequickOrder);
QuickOrderRouter.delete("/delete/:id", DeletequickOrder);
QuickOrderRouter.get("/:id", getOnequickOrder);
QuickOrderRouter.get("/all", allquickOrders);
export default QuickOrderRouter;

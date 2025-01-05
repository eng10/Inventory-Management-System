import { Router } from "express";
import {
  DeleteshiftCategory,
  RegistershiftCategory,
  UpdateshiftCategory,
  allshiftCategorys,
  getOneshiftCategory,
} from "../Controllers/ShiftCategoryController";
const ShiftCategoryRouter = Router();
ShiftCategoryRouter.post("/register", RegistershiftCategory);
ShiftCategoryRouter.put("/update/:id", UpdateshiftCategory);
ShiftCategoryRouter.delete("/delete/:id", DeleteshiftCategory);
ShiftCategoryRouter.get("/:id", getOneshiftCategory);
ShiftCategoryRouter.get("/all", allshiftCategorys);
export default ShiftCategoryRouter;

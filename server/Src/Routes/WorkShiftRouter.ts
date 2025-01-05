import { Router } from "express";
import {
  DeleteworkShift,
  RegisterworkShift,
  UpdateworkShift,
  allworkShifts,
  getOneworkShift,
} from "../Controllers/WorkShiftController";
const WorkShiftRouter = Router();
WorkShiftRouter.post("/register", RegisterworkShift);
WorkShiftRouter.put("/update/:id", UpdateworkShift);
WorkShiftRouter.delete("/delete/:id", DeleteworkShift);
WorkShiftRouter.get("/:id", getOneworkShift);
WorkShiftRouter.get("/all", allworkShifts);
export default WorkShiftRouter;

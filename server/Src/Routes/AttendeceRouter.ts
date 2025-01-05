import { Router } from "express";
import {
  Deleteattendance,
  Registerattendance,
  Updateattendance,
  allattendances,
  getOneattendance,
} from "../Controllers/AttendanceController";
const AttendeceRouter = Router();
AttendeceRouter.post("/register", Registerattendance);
AttendeceRouter.put("/update/:id", Updateattendance);
AttendeceRouter.delete("/delete/:id", Deleteattendance);
AttendeceRouter.get("/:id", getOneattendance);
AttendeceRouter.get("/all", allattendances);
export default AttendeceRouter;

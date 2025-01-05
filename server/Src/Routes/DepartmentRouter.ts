import { Router } from "express";
import {
  Deletedepartment,
  Registerdepartment,
  Updatedepartment,
  alldepartments,
  getOnedepartment,
} from "../Controllers/DepartmentController";
import { decodeToken } from "../helpers/secure/jwt";
const DepartmentRouter = Router();
DepartmentRouter.post("/register", decodeToken, Registerdepartment);
DepartmentRouter.put("/update/:id", Updatedepartment);
DepartmentRouter.delete("/delete/:id", Deletedepartment);
DepartmentRouter.get("/:id", getOnedepartment);
DepartmentRouter.get("/all", alldepartments);
export default DepartmentRouter;

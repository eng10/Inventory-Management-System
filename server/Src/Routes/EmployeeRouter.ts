import { Router } from "express";
import {
  Deletedeemaployee,
  Registerdeemaployee,
  Updatedeemaployee,
  alldeemaployees,
  getOnedeemaployee,
} from "../Controllers/EmployeeController";

const EmployeeRouter = Router();
EmployeeRouter.post("/register", Registerdeemaployee);
EmployeeRouter.put("/update/:id", Updatedeemaployee);
EmployeeRouter.delete("/delete/:id", Deletedeemaployee);
EmployeeRouter.get("/:id", getOnedeemaployee);
EmployeeRouter.get("/all", alldeemaployees);
export default EmployeeRouter;

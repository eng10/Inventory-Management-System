import { Router } from "express";
import {
  allUsers,
  getOneUser,
  login,
  RegisterUser,
  UpdateUser,
} from "../Controllers/UserController";
const router = Router();

router.post("/register", RegisterUser);
router.post("/login", login);
router.get("/all", allUsers);
router.get("/one/:userid", getOneUser);
router.put("/update/:id", UpdateUser);

export default router;

import { Router } from "express";
import { decodeToken } from "../helpers/secure/jwt";
import {
  allbranchs,
  Deletebranch,
  getOnebranch,
  Registerbranch,
  Updatebranch,
} from "../Controllers/BranchController";

const router = Router();

router.post("/register", decodeToken,  Registerbranch);
router.put("/update/:id", Updatebranch);
router.delete("/delete/:id", Deletebranch);
router.get("/:id", getOnebranch);
router.get("/all", allbranchs);

export default router;

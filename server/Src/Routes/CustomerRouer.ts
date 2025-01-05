import { Router } from "express";
import {
  Deletecustomer,
  Registercustomer,
  Updatecustomer,
  allcustomers,
  getOnecustomer,
} from "../Controllers/CustomerController";
import { decodeToken } from "../helpers/secure/jwt";
const router = Router();
router.post("/register", decodeToken,  Registercustomer);
router.put("/update/:id", Updatecustomer);
router.delete("/delete/:id", Deletecustomer);
router.get("/:id", getOnecustomer);
router.get("/all", allcustomers);
export default router;

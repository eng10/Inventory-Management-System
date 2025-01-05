import { Router } from "express";
import {
  Deleteproduct,
  Registerproduct,
  Updateproduct,
  allproducts,
  getOneproduct,
} from "../Controllers/ProductController";
import { decodeToken } from "../helpers/secure/jwt";
const router = Router();
router.post("/register", decodeToken, Registerproduct);
router.put("/update/:id", Updateproduct);
router.delete("/delete/:id", Deleteproduct);
router.get("/:id", getOneproduct);
router.get("/all", allproducts);
export default router;

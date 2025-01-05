import { Router } from "express";
import {
  DeleteVendor,
  RegisterVendor,
  UpdateVendor,
  allVendors,
  getOneVendor,
} from "../Controllers/VendorController";
const VendorRouter = Router();
VendorRouter.post("/register", RegisterVendor);
VendorRouter.put("/update/:id", UpdateVendor);
VendorRouter.delete("/delete/:id", DeleteVendor);
VendorRouter.get("/:id", getOneVendor);
VendorRouter.get("/all", allVendors);
export default VendorRouter;

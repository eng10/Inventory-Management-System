import { Router } from "express";
import {
  DeleteproductTransfer,
  RegisterproductTransfer,
  UpdateproductTransfer,
  allproductTransfers,
  getOneproductTransfer,
} from "../Controllers/ProductTransferController";
const ProductTransferRouter = Router();
ProductTransferRouter.post("/register", RegisterproductTransfer);
ProductTransferRouter.put("/update/:id", UpdateproductTransfer);
ProductTransferRouter.delete("/delete/:id", DeleteproductTransfer);
ProductTransferRouter.get("/:id", getOneproductTransfer);
ProductTransferRouter.get("/all", allproductTransfers);
export default ProductTransferRouter;

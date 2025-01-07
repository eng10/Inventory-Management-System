import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import UserRouter from "./Routes/UserRouter";
import AccountingRouter from "./Routes/AccountingRouter";
import AccountingTransferRouter from "./Routes/AccountingTransferRouter";
import AttendeceRouter from "./Routes/AttendeceRouter";
import BookingRouter from "./Routes/BookingRouter";
import BranchRouter from "./Routes/BranchRouter";
import CustomerRouer from "./Routes/CustomerRouer";
import DepartmentRouter from "./Routes/DepartmentRouter";
import EmployeeRouter from "./Routes/EmployeeRouter";
import GeneralJournalRouter from "./Routes/GeneralJournalRouter";
import InventoryRouter from "./Routes/InventoryRouter";
import JournalEntryRouter from "./Routes/JournalEntryRouter";
import ProductCategoryRouter from "./Routes/ProductCategoryRouter";
import ProductRouter from "./Routes/ProductRouter";
import ProductTransferRouter from "./Routes/ProductTransferRouter";
import PurchaseRouter from "./Routes/PurchaseRouter";
import QuickOrderRouter from "./Routes/QuickOrderRouter";
import SaleRouter from "./Routes/SaleRouter";
import ShiftCategoryRouter from "./Routes/ShiftCategoryRouter";
import VendorRouter from "./Routes/VendorRouter";
import WorkShiftRouter from "./Routes/WorkShiftRouter";
import ExpenseRouter from "./Routes/ExpenseRouter";
import Organisation from "./Routes/OrganisationRoutes";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const port = process.env.port;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(
  cors({
    origin: process?.env?.FRONTEND_URL || true,
    credentials: true,
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  })
);

//  midmponts

app.use("/api/v1/user", UserRouter);
app.use("/api/v1/accounting", AccountingRouter);
app.use("/api/v1/accountTransfer", AccountingTransferRouter);
app.use("/api/v1/attendence", AttendeceRouter);
app.use("/api/v1/booking", BookingRouter);
app.use("/api/v1/branch", BranchRouter);
app.use("/api/v1/customer", CustomerRouer);
app.use("/api/v1/department", DepartmentRouter);
app.use("/api/v1/employee", EmployeeRouter);
app.use("/api/v1/expense", ExpenseRouter);
app.use("/api/v1/generaljournal", GeneralJournalRouter);
app.use("/api/v1/inventory", InventoryRouter);
app.use("/api/v1/journalEntry", JournalEntryRouter);
app.use("/api/v1/productCategory", ProductCategoryRouter);
app.use("/api/v1/product", ProductRouter);
app.use("/api/v1/productTransfer", ProductTransferRouter);
app.use("/api/v1/purchase", PurchaseRouter);
app.use("/api/v1/quickOrder", QuickOrderRouter);
app.use("/api/v1/sale", SaleRouter);
app.use("/api/v1/shiftcategory", ShiftCategoryRouter);
app.use("/api/v1/vendor", VendorRouter);
app.use("/api/v1/workshift", WorkShiftRouter);
app.use("/api/v1/Organisation", Organisation);

// Catch-all route for undefined routes (404 handler)
app.all("*", (req, res) => {
  res.status(404).json({
    message: "API Not Found",
    status: 404,
  });
});
app.listen(port, () => console.log(`server is on ${port}`));

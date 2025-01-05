import express from "express";
import cors from 'cors';

import dotenv from "dotenv";
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
import cookieParser from "cookie-parser";
import morgan from "morgan";

dotenv.config();

const app = express();

app.use(express.json());
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

const port = process.env.port;

app.get("/", (req, res) => {
  res.send("Hello World");
});




app.use("/api/user", UserRouter);
app.use("/api/accounting", AccountingRouter);
app.use("/api/accountTransfer", AccountingTransferRouter);
app.use("/api/attendence", AttendeceRouter);
app.use("/api/booking", BookingRouter);
app.use("/api/branch", BranchRouter);
app.use("/api/customer", CustomerRouer);
app.use("/api/department", DepartmentRouter);
app.use("/api/employee", EmployeeRouter);
app.use("/api/expense", ExpenseRouter);
app.use("/api/generaljournal", GeneralJournalRouter);
app.use("/api/inventory", InventoryRouter);
app.use("/api/journalEntry", JournalEntryRouter);
app.use("/api/productCategory", ProductCategoryRouter);
app.use("/api/product", ProductRouter);
app.use("/api/productTransfer", ProductTransferRouter);
app.use("/api/purchase", PurchaseRouter);
app.use("/api/quickOrder", QuickOrderRouter);
app.use("/api/sale", SaleRouter);
app.use("/api/shiftcategory", ShiftCategoryRouter);
app.use("/api/vendor", VendorRouter);
app.use("/api/workshift", WorkShiftRouter);
app.use("/api/Organisation",Organisation)

//midpionts




app.listen(port, () => console.log(`server is on ${port}`))
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const UserRouter_1 = __importDefault(require("./Routes/UserRouter"));
const AccountingRouter_1 = __importDefault(require("./Routes/AccountingRouter"));
const AccountingTransferRouter_1 = __importDefault(require("./Routes/AccountingTransferRouter"));
const AttendeceRouter_1 = __importDefault(require("./Routes/AttendeceRouter"));
const BookingRouter_1 = __importDefault(require("./Routes/BookingRouter"));
const BranchRouter_1 = __importDefault(require("./Routes/BranchRouter"));
const CustomerRouer_1 = __importDefault(require("./Routes/CustomerRouer"));
const DepartmentRouter_1 = __importDefault(require("./Routes/DepartmentRouter"));
const EmployeeRouter_1 = __importDefault(require("./Routes/EmployeeRouter"));
const GeneralJournalRouter_1 = __importDefault(require("./Routes/GeneralJournalRouter"));
const InventoryRouter_1 = __importDefault(require("./Routes/InventoryRouter"));
const JournalEntryRouter_1 = __importDefault(require("./Routes/JournalEntryRouter"));
const ProductCategoryRouter_1 = __importDefault(require("./Routes/ProductCategoryRouter"));
const ProductRouter_1 = __importDefault(require("./Routes/ProductRouter"));
const ProductTransferRouter_1 = __importDefault(require("./Routes/ProductTransferRouter"));
const PurchaseRouter_1 = __importDefault(require("./Routes/PurchaseRouter"));
const QuickOrderRouter_1 = __importDefault(require("./Routes/QuickOrderRouter"));
const SaleRouter_1 = __importDefault(require("./Routes/SaleRouter"));
const ShiftCategoryRouter_1 = __importDefault(require("./Routes/ShiftCategoryRouter"));
const VendorRouter_1 = __importDefault(require("./Routes/VendorRouter"));
const WorkShiftRouter_1 = __importDefault(require("./Routes/WorkShiftRouter"));
const ExpenseRouter_1 = __importDefault(require("./Routes/ExpenseRouter"));
const OrganisationRoutes_1 = __importDefault(require("./Routes/OrganisationRoutes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)({
    origin: ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.FRONTEND_URL) || true,
    credentials: true,
    methods: "GET,POST,PUT,DELETE,OPTIONS",
}));
const port = process.env.port;
app.get("/", (req, res) => {
    res.send("Hello World");
});
app.use("/api/user", UserRouter_1.default);
app.use("/api/accounting", AccountingRouter_1.default);
app.use("/api/accountTransfer", AccountingTransferRouter_1.default);
app.use("/api/attendence", AttendeceRouter_1.default);
app.use("/api/booking", BookingRouter_1.default);
app.use("/api/branch", BranchRouter_1.default);
app.use("/api/customer", CustomerRouer_1.default);
app.use("/api/department", DepartmentRouter_1.default);
app.use("/api/employee", EmployeeRouter_1.default);
app.use("/api/expense", ExpenseRouter_1.default);
app.use("/api/generaljournal", GeneralJournalRouter_1.default);
app.use("/api/inventory", InventoryRouter_1.default);
app.use("/api/journalEntry", JournalEntryRouter_1.default);
app.use("/api/productCategory", ProductCategoryRouter_1.default);
app.use("/api/product", ProductRouter_1.default);
app.use("/api/productTransfer", ProductTransferRouter_1.default);
app.use("/api/purchase", PurchaseRouter_1.default);
app.use("/api/quickOrder", QuickOrderRouter_1.default);
app.use("/api/sale", SaleRouter_1.default);
app.use("/api/shiftcategory", ShiftCategoryRouter_1.default);
app.use("/api/vendor", VendorRouter_1.default);
app.use("/api/workshift", WorkShiftRouter_1.default);
app.use("/api/Organisation", OrganisationRoutes_1.default);
//midpionts
app.listen(port, () => console.log(`server is on ${port}`));

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'MANAGER', 'EMPLOYEE', 'CUSTOMER');

-- CreateEnum
CREATE TYPE "BookingStatus" AS ENUM ('PENDING', 'CONFIRMED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "ShiftType" AS ENUM ('MORNING', 'EVENING', 'NIGHT');

-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('CREDIT', 'DEBIT');

-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('ASSET', 'LIABILITY', 'EQUITY', 'INCOME', 'EXPENSE');

-- CreateEnum
CREATE TYPE "PurchaseStatus" AS ENUM ('PENDING', 'COMPLETED', 'CANCELED');

-- CreateTable
CREATE TABLE "User" (
    "UserId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'ADMIN',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("UserId")
);

-- CreateTable
CREATE TABLE "Organisation" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "logo" TEXT,
    "email" TEXT,
    "phone" TEXT,
    "website" TEXT,
    "address" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "postalCode" TEXT,
    "registrationNumber" TEXT,
    "taxId" TEXT,
    "foundedAt" TIMESTAMP(3),
    "industry" TEXT,
    "employees" INTEGER,
    "socialLinks" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Organisation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Product" (
    "ProductId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "quantity" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "CategoryId" INTEGER,
    "userUserId" INTEGER,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("ProductId")
);

-- CreateTable
CREATE TABLE "ProductCategory" (
    "CategoryId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "userUserId" INTEGER,

    CONSTRAINT "ProductCategory_pkey" PRIMARY KEY ("CategoryId")
);

-- CreateTable
CREATE TABLE "Inventory" (
    "InventoryId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "BranchId" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userUserId" INTEGER,

    CONSTRAINT "Inventory_pkey" PRIMARY KEY ("InventoryId")
);

-- CreateTable
CREATE TABLE "Branch" (
    "BranchId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "address" TEXT,
    "userUserId" INTEGER,

    CONSTRAINT "Branch_pkey" PRIMARY KEY ("BranchId")
);

-- CreateTable
CREATE TABLE "Booking" (
    "BookingId" SERIAL NOT NULL,
    "ProductId" INTEGER NOT NULL,
    "CustomerId" INTEGER NOT NULL,
    "bookingDate" TIMESTAMP(3) NOT NULL,
    "status" "BookingStatus" NOT NULL DEFAULT 'PENDING',
    "userUserId" INTEGER,

    CONSTRAINT "Booking_pkey" PRIMARY KEY ("BookingId")
);

-- CreateTable
CREATE TABLE "Sale" (
    "SaleId" SERIAL NOT NULL,
    "ProductId" INTEGER NOT NULL,
    "CustomerId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalAmount" DOUBLE PRECISION NOT NULL,
    "saleDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userUserId" INTEGER,

    CONSTRAINT "Sale_pkey" PRIMARY KEY ("SaleId")
);

-- CreateTable
CREATE TABLE "Purchase" (
    "PurchaseId" SERIAL NOT NULL,
    "VendorId" INTEGER NOT NULL,
    "quantity" INTEGER,
    "totalAmount" DOUBLE PRECISION,
    "PurchaseStatus" "PurchaseStatus" NOT NULL DEFAULT 'PENDING',
    "purchaseDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userUserId" INTEGER,
    "productProductId" INTEGER,

    CONSTRAINT "Purchase_pkey" PRIMARY KEY ("PurchaseId")
);

-- CreateTable
CREATE TABLE "ProductTransfer" (
    "TransferId" SERIAL NOT NULL,
    "ProductId" INTEGER NOT NULL,
    "FromBranchId" INTEGER NOT NULL,
    "ToBranchId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "transferDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userUserId" INTEGER,

    CONSTRAINT "ProductTransfer_pkey" PRIMARY KEY ("TransferId")
);

-- CreateTable
CREATE TABLE "QuickOrder" (
    "QuickOrderId" SERIAL NOT NULL,
    "CustomerId" INTEGER NOT NULL,
    "ProductId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "orderDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userUserId" INTEGER,

    CONSTRAINT "QuickOrder_pkey" PRIMARY KEY ("QuickOrderId")
);

-- CreateTable
CREATE TABLE "Customer" (
    "CustomerId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "address" TEXT,
    "userUserId" INTEGER,

    CONSTRAINT "Customer_pkey" PRIMARY KEY ("CustomerId")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "VendorId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "contactInfo" TEXT,
    "email" TEXT,
    "userUserId" INTEGER,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("VendorId")
);

-- CreateTable
CREATE TABLE "Employee" (
    "EmployeeId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "DepartmentId" INTEGER NOT NULL,
    "BranchId" INTEGER NOT NULL,
    "userUserId" INTEGER,

    CONSTRAINT "Employee_pkey" PRIMARY KEY ("EmployeeId")
);

-- CreateTable
CREATE TABLE "Department" (
    "DepartmentId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userUserId" INTEGER,

    CONSTRAINT "Department_pkey" PRIMARY KEY ("DepartmentId")
);

-- CreateTable
CREATE TABLE "WorkShift" (
    "WorkShiftId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ShiftCategoryId" INTEGER NOT NULL,
    "type" "ShiftType" NOT NULL DEFAULT 'MORNING',

    CONSTRAINT "WorkShift_pkey" PRIMARY KEY ("WorkShiftId")
);

-- CreateTable
CREATE TABLE "ShiftCategory" (
    "ShiftCategoryId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "ShiftCategory_pkey" PRIMARY KEY ("ShiftCategoryId")
);

-- CreateTable
CREATE TABLE "Attendance" (
    "AttendanceId" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "employeeEmployeeId" INTEGER,

    CONSTRAINT "Attendance_pkey" PRIMARY KEY ("AttendanceId")
);

-- CreateTable
CREATE TABLE "JournalEntry" (
    "JournalEntryId" SERIAL NOT NULL,
    "AccountId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userUserId" INTEGER,
    "generalJournalGeneralJournalId" INTEGER,

    CONSTRAINT "JournalEntry_pkey" PRIMARY KEY ("JournalEntryId")
);

-- CreateTable
CREATE TABLE "GeneralJournal" (
    "GeneralJournalId" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "userUserId" INTEGER,

    CONSTRAINT "GeneralJournal_pkey" PRIMARY KEY ("GeneralJournalId")
);

-- CreateTable
CREATE TABLE "Expense" (
    "ExpenseId" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userUserId" INTEGER,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("ExpenseId")
);

-- CreateTable
CREATE TABLE "Accounting" (
    "AccountingId" SERIAL NOT NULL,
    "accountName" TEXT NOT NULL,
    "accountType" "AccountType" NOT NULL DEFAULT 'EXPENSE',
    "userUserId" INTEGER,

    CONSTRAINT "Accounting_pkey" PRIMARY KEY ("AccountingId")
);

-- CreateTable
CREATE TABLE "AccountTransfer" (
    "TransferId" SERIAL NOT NULL,
    "FromAccountId" INTEGER NOT NULL,
    "ToAccountId" INTEGER NOT NULL,
    "amount" DOUBLE PRECISION NOT NULL,
    "transferDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "type" "TransactionType" NOT NULL,
    "userUserId" INTEGER,

    CONSTRAINT "AccountTransfer_pkey" PRIMARY KEY ("TransferId")
);

-- CreateTable
CREATE TABLE "_EmployeeToWorkShift" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_EmployeeToWorkShift_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Organisation_name_key" ON "Organisation"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Organisation_email_key" ON "Organisation"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Customer_email_key" ON "Customer"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_email_key" ON "Vendor"("email");

-- CreateIndex
CREATE INDEX "_EmployeeToWorkShift_B_index" ON "_EmployeeToWorkShift"("B");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_CategoryId_fkey" FOREIGN KEY ("CategoryId") REFERENCES "ProductCategory"("CategoryId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductCategory" ADD CONSTRAINT "ProductCategory_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_BranchId_fkey" FOREIGN KEY ("BranchId") REFERENCES "Branch"("BranchId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Inventory" ADD CONSTRAINT "Inventory_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Branch" ADD CONSTRAINT "Branch_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "Product"("ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_CustomerId_fkey" FOREIGN KEY ("CustomerId") REFERENCES "Customer"("CustomerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "Product"("ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_CustomerId_fkey" FOREIGN KEY ("CustomerId") REFERENCES "Customer"("CustomerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Sale" ADD CONSTRAINT "Sale_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_VendorId_fkey" FOREIGN KEY ("VendorId") REFERENCES "Vendor"("VendorId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Purchase" ADD CONSTRAINT "Purchase_productProductId_fkey" FOREIGN KEY ("productProductId") REFERENCES "Product"("ProductId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTransfer" ADD CONSTRAINT "ProductTransfer_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "Product"("ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTransfer" ADD CONSTRAINT "ProductTransfer_FromBranchId_fkey" FOREIGN KEY ("FromBranchId") REFERENCES "Branch"("BranchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTransfer" ADD CONSTRAINT "ProductTransfer_ToBranchId_fkey" FOREIGN KEY ("ToBranchId") REFERENCES "Branch"("BranchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProductTransfer" ADD CONSTRAINT "ProductTransfer_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuickOrder" ADD CONSTRAINT "QuickOrder_CustomerId_fkey" FOREIGN KEY ("CustomerId") REFERENCES "Customer"("CustomerId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuickOrder" ADD CONSTRAINT "QuickOrder_ProductId_fkey" FOREIGN KEY ("ProductId") REFERENCES "Product"("ProductId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuickOrder" ADD CONSTRAINT "QuickOrder_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Customer" ADD CONSTRAINT "Customer_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vendor" ADD CONSTRAINT "Vendor_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_DepartmentId_fkey" FOREIGN KEY ("DepartmentId") REFERENCES "Department"("DepartmentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_BranchId_fkey" FOREIGN KEY ("BranchId") REFERENCES "Branch"("BranchId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Employee" ADD CONSTRAINT "Employee_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Department" ADD CONSTRAINT "Department_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WorkShift" ADD CONSTRAINT "WorkShift_ShiftCategoryId_fkey" FOREIGN KEY ("ShiftCategoryId") REFERENCES "ShiftCategory"("ShiftCategoryId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Attendance" ADD CONSTRAINT "Attendance_employeeEmployeeId_fkey" FOREIGN KEY ("employeeEmployeeId") REFERENCES "Employee"("EmployeeId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JournalEntry" ADD CONSTRAINT "JournalEntry_AccountId_fkey" FOREIGN KEY ("AccountId") REFERENCES "Accounting"("AccountingId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JournalEntry" ADD CONSTRAINT "JournalEntry_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JournalEntry" ADD CONSTRAINT "JournalEntry_generalJournalGeneralJournalId_fkey" FOREIGN KEY ("generalJournalGeneralJournalId") REFERENCES "GeneralJournal"("GeneralJournalId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneralJournal" ADD CONSTRAINT "GeneralJournal_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Accounting" ADD CONSTRAINT "Accounting_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountTransfer" ADD CONSTRAINT "AccountTransfer_FromAccountId_fkey" FOREIGN KEY ("FromAccountId") REFERENCES "Accounting"("AccountingId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountTransfer" ADD CONSTRAINT "AccountTransfer_ToAccountId_fkey" FOREIGN KEY ("ToAccountId") REFERENCES "Accounting"("AccountingId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AccountTransfer" ADD CONSTRAINT "AccountTransfer_userUserId_fkey" FOREIGN KEY ("userUserId") REFERENCES "User"("UserId") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToWorkShift" ADD CONSTRAINT "_EmployeeToWorkShift_A_fkey" FOREIGN KEY ("A") REFERENCES "Employee"("EmployeeId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EmployeeToWorkShift" ADD CONSTRAINT "_EmployeeToWorkShift_B_fkey" FOREIGN KEY ("B") REFERENCES "WorkShift"("WorkShiftId") ON DELETE CASCADE ON UPDATE CASCADE;

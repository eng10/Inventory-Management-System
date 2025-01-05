"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jwt_1 = require("../helpers/secure/jwt");
const BranchController_1 = require("../Controllers/BranchController");
const router = (0, express_1.Router)();
router.post("/register", jwt_1.decodeToken, BranchController_1.Registerbranch);
router.put("/update/:id", BranchController_1.Updatebranch);
router.delete("/delete/:id", BranchController_1.Deletebranch);
router.get("/:id", BranchController_1.getOnebranch);
router.get("/all", BranchController_1.allbranchs);
exports.default = router;

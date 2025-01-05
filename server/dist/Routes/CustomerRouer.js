"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CustomerController_1 = require("../Controllers/CustomerController");
const jwt_1 = require("../helpers/secure/jwt");
const router = (0, express_1.Router)();
router.post("/register", jwt_1.decodeToken, CustomerController_1.Registercustomer);
router.put("/update/:id", CustomerController_1.Updatecustomer);
router.delete("/delete/:id", CustomerController_1.Deletecustomer);
router.get("/:id", CustomerController_1.getOnecustomer);
router.get("/all", CustomerController_1.allcustomers);
exports.default = router;

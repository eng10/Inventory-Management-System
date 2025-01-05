"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const VendorController_1 = require("../Controllers/VendorController");
const VendorRouter = (0, express_1.Router)();
VendorRouter.post('/register', VendorController_1.RegisterVendor);
VendorRouter.put('/update/:id', VendorController_1.UpdateVendor);
VendorRouter.delete('/delete/:id', VendorController_1.DeleteVendor);
VendorRouter.get('/:id', VendorController_1.getOneVendor);
VendorRouter.get('/all', VendorController_1.allVendors);
exports.default = VendorRouter;

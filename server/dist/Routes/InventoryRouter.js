"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const InventoryController_1 = require("../Controllers/InventoryController");
const InventoryRouter = (0, express_1.Router)();
InventoryRouter.post('/register', InventoryController_1.Registerinventory);
InventoryRouter.put('/update/:id', InventoryController_1.Updateinventory);
InventoryRouter.delete('/delete/:id', InventoryController_1.Deleteinventory);
InventoryRouter.get('/:id', InventoryController_1.getOneinventory);
InventoryRouter.get('/all', InventoryController_1.allinventorys);
exports.default = InventoryRouter;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SaleController_1 = require("../Controllers/SaleController");
const SaleRouter = (0, express_1.Router)();
SaleRouter.post('/register', SaleController_1.Registersale);
SaleRouter.put('/update/:id', SaleController_1.Updatesale);
SaleRouter.delete('/delete/:id', SaleController_1.Deletesale);
SaleRouter.get('/:id', SaleController_1.getOnesale);
SaleRouter.get('/all', SaleController_1.allsales);
exports.default = SaleRouter;

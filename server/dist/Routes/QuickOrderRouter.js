"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const QuickOrderController_1 = require("../Controllers/QuickOrderController");
const QuickOrderRouter = (0, express_1.Router)();
QuickOrderRouter.post("/register", QuickOrderController_1.RegisterquickOrder);
QuickOrderRouter.put("/update/:id", QuickOrderController_1.UpdatequickOrder);
QuickOrderRouter.delete("/delete/:id", QuickOrderController_1.DeletequickOrder);
QuickOrderRouter.get("/:id", QuickOrderController_1.getOnequickOrder);
QuickOrderRouter.get("/all", QuickOrderController_1.allquickOrders);
exports.default = QuickOrderRouter;

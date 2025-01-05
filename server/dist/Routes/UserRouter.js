"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../Controllers/UserController");
const UserRouter = (0, express_1.Router)();
UserRouter.post('/register', UserController_1.RegisterUser);
UserRouter.put('/update/:id', UserController_1.UpdateUser);
UserRouter.delete('/delete/:id', UserController_1.DeleteUser);
UserRouter.get('/:id', UserController_1.getOneUser);
UserRouter.get('/all', UserController_1.allUsers);
exports.default = UserRouter;
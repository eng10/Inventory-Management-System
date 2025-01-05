"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BookingController_1 = require("../Controllers/BookingController");
const BookingRouter = (0, express_1.Router)();
BookingRouter.post('/register', BookingController_1.Registerbooking);
BookingRouter.put('/update/:id', BookingController_1.Updatebooking);
BookingRouter.delete('/delete/:id', BookingController_1.Deletebooking);
BookingRouter.get('/:id', BookingController_1.getOnebooking);
BookingRouter.get('/all', BookingController_1.allbookings);
exports.default = BookingRouter;
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Deletebooking = exports.getOnebooking = exports.allbookings = exports.Updatebooking = exports.Registerbooking = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const Registerbooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookingDate, CustomerId, userUserId, ProductId, } = req.body;
        const Createbooking = yield prisma.booking.create({
            data: {
                bookingDate,
                CustomerId,
                userUserId,
                ProductId,
            }
        });
        return res.status(201).json({
            message: "successfully created "
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.Registerbooking = Registerbooking;
const Updatebooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { bookingDate, CustomerId, userUserId, ProductId, } = req.body;
        const { id } = req.params;
        const upd = yield prisma.booking.update({
            where: {
                BookingId: +id
            },
            data: {
                bookingDate,
                CustomerId,
                userUserId,
                ProductId,
            }
        });
        return res.status(201).json({
            message: "successfully updated "
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.Updatebooking = Updatebooking;
const allbookings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bookings = yield prisma.booking.findMany();
        return res.status(201).json(bookings);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.allbookings = allbookings;
const getOnebooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const booking = yield prisma.booking.findFirst({
            where: {
                BookingId: +id
            }
        });
        return res.status(201).json(booking);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.getOnebooking = getOnebooking;
const Deletebooking = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const del = yield prisma.booking.delete({
            where: {
                BookingId: +id
            }
        });
        return res.status(201).json(del);
    }
    catch (error) {
        return res.status(500).json({
            message: "something went wrong please try again"
        });
    }
});
exports.Deletebooking = Deletebooking;

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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = exports.getOneUser = exports.allUsers = exports.UpdateUser = exports.login = exports.RegisterUser = void 0;
const client_1 = require("@prisma/client");
const jwt_1 = require("../helpers/secure/jwt");
const bcryptjs_1 = __importDefault(require("bcryptjs")); // Corrected import
const prisma = new client_1.PrismaClient();
const RegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name, password } = req.body;
        if (!email || !name || !password) {
            return res.status(400).json({
                isSuccess: false,
                message: "Please provide info",
            });
        }
        //checking email
        const useremail = yield prisma.user.findFirst({
            where: {
                email,
            },
        });
        if (useremail) {
            return res.status(400).json({
                isSuccess: false,
                message: "email is already used",
            });
        }
        //hashpass
        const hashpass = bcryptjs_1.default.hashSync(password);
        //create email
        const newuser = yield prisma.user.create({
            data: {
                email,
                name,
                password: hashpass,
                role: req.body.role,
            },
            select: {
                UserId: true,
                email: true,
                role: true,
            },
        });
        res.json({
            isSuccess: true,
            result: Object.assign({}, newuser),
        });
    }
    catch (error) {
        console.log(error);
        res.json(error);
    }
});
exports.RegisterUser = RegisterUser;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                isSuccess: false,
                message: "Please provide email and password",
            });
        }
        const user = yield prisma.user.findFirst({
            where: { email },
        });
        if (!user) {
            return res.status(400).json({
                isSuccess: false,
                message: "Invalid email or password",
            });
        }
        // Verify password
        const isPasswordValid = bcryptjs_1.default.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({
                isSuccess: false,
                message: "Invalid email or password",
            });
        }
        // Generate token
        const token = (0, jwt_1.generateToken)({
            UserId: user.UserId,
            email: user.email,
            role: user.role,
        });
        const result = {
            email: user.email,
            name: user.name,
            role: user.role,
            token,
        };
        return res.status(200).json({
            result,
            isSuccess: true,
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong. Please try again.",
            error: error.message,
        });
    }
});
exports.login = login;
const UpdateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, name, password } = req.body;
        const { id } = req.params;
        const hashedPassword = password ? bcryptjs_1.default.hashSync(password, 10) : undefined;
        const updatedUser = yield prisma.user.update({
            where: { UserId: Number(id) },
            data: Object.assign({ email,
                name }, (hashedPassword && { password: hashedPassword })),
        });
        return res.status(200).json({
            message: "User updated successfully",
            user: {
                id: updatedUser.UserId,
                email: updatedUser.email,
                name: updatedUser.name,
            },
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong. Please try again.",
            error: error.message,
        });
    }
});
exports.UpdateUser = UpdateUser;
const allUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany({
            select: { UserId: true, email: true, name: true, role: true }, // Exclude sensitive data
        });
        return res.status(200).json(users);
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong. Please try again.",
            error: error.message,
        });
    }
});
exports.allUsers = allUsers;
const getOneUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield prisma.user.findFirst({
            where: { UserId: Number(id) },
            select: { UserId: true, email: true, name: true, role: true }, // Exclude sensitive data
        });
        if (!user) {
            return res.status(404).json({
                message: "User not found",
            });
        }
        return res.status(200).json(user);
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong. Please try again.",
            error: error.message,
        });
    }
});
exports.getOneUser = getOneUser;
const DeleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield prisma.user.delete({
            where: { UserId: Number(id) },
        });
        return res.status(200).json({
            message: "User deleted successfully",
        });
    }
    catch (error) {
        return res.status(500).json({
            message: "Something went wrong. Please try again.",
            error: error.message,
        });
    }
});
exports.DeleteUser = DeleteUser;

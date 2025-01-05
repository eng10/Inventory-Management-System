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
exports.getFilteredOrganisations = exports.deleteOrganisation = exports.updateOrganisation = exports.getOrganisationById = exports.getAllOrganisations = exports.createOrganisation = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createOrganisation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== "ADMIN") {
            return res.status(403).json({ message: "Access denied", isSuccess: false });
        }
        const { name, description, logo, email, phone, website, address, city, state, country, postalCode, registrationNumber, taxId, foundedAt, industry, employees, socialLinks, } = req.body.organisation;
        if (!name) {
            return res.status(400).json({ message: "Name is required", isSuccess: false });
        }
        const organisation = yield prisma.organisation.create({
            data: {
                name,
                description,
                logo,
                email,
                phone,
                website,
                address,
                city,
                state,
                country,
                postalCode,
                registrationNumber,
                taxId,
                foundedAt: foundedAt ? new Date(foundedAt) : undefined,
                industry,
                employees,
                socialLinks,
            },
        });
        res.status(201).json({ organisation, isSuccess: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong", isSuccess: false });
    }
});
exports.createOrganisation = createOrganisation;
const getAllOrganisations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organisations = yield prisma.organisation.findMany({
            orderBy: { createdAt: "desc" },
        });
        res.status(200).json({ organisations, isSuccess: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong", isSuccess: false });
    }
});
exports.getAllOrganisations = getAllOrganisations;
const getOrganisationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const organisation = yield prisma.organisation.findUnique({
            where: { id: Number(id) },
        });
        if (!organisation) {
            return res.status(404).json({ message: "Organisation not found", isSuccess: false });
        }
        res.status(200).json({ organisation, isSuccess: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong", isSuccess: false });
    }
});
exports.getOrganisationById = getOrganisationById;
const updateOrganisation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== "ADMIN") {
            return res.status(403).json({ message: "Access denied", isSuccess: false });
        }
        const { id } = req.params;
        const updates = req.body.Organisation;
        const organisation = yield prisma.organisation.update({
            where: { id: Number(id) },
            data: updates,
        });
        res.status(200).json({ organisation, isSuccess: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong", isSuccess: false });
    }
});
exports.updateOrganisation = updateOrganisation;
const deleteOrganisation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.role) !== "ADMIN") {
            return res.status(403).json({ message: "Access denied", isSuccess: false });
        }
        const { id } = req.params;
        yield prisma.organisation.delete({
            where: { id: Number(id) },
        });
        res.status(204).send();
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong", isSuccess: false });
    }
});
exports.deleteOrganisation = deleteOrganisation;
const getFilteredOrganisations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { city, industry, country } = req.query;
        const organisations = yield prisma.organisation.findMany({
            where: {
                city: city ? { equals: String(city), mode: "insensitive" } : undefined,
                industry: industry ? { equals: String(industry), mode: "insensitive" } : undefined,
                country: country ? { equals: String(country), mode: "insensitive" } : undefined,
            },
        });
        res.status(200).json({ organisations, isSuccess: true });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Something went wrong", isSuccess: false });
    }
});
exports.getFilteredOrganisations = getFilteredOrganisations;

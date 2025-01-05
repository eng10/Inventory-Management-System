"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const OrganisationController_1 = require("../Controllers/OrganisationController");
const router = express_1.default.Router();
router.post("/Create", OrganisationController_1.createOrganisation);
router.get("/Filter", OrganisationController_1.getAllOrganisations);
router.get("/filter", OrganisationController_1.getFilteredOrganisations);
router.get("/one/:id", OrganisationController_1.getOrganisationById);
router.put("/Update/:id", OrganisationController_1.updateOrganisation);
router.delete("/Delet/:id", OrganisationController_1.deleteOrganisation);
exports.default = router;

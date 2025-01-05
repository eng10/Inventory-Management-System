import express from "express";
import {
  createOrganisation,
  deleteOrganisation,
  getAllOrganisations,
  getFilteredOrganisations,
  getOrganisationById,
  updateOrganisation,
} from "../Controllers/OrganisationController";

const router = express.Router();

router.post("/Create", createOrganisation);
router.get("/Filter", getAllOrganisations);
router.get("/filter", getFilteredOrganisations); 
router.get("/one/:id", getOrganisationById);
router.put("/Update/:id", updateOrganisation);
router.delete("/Delet/:id", deleteOrganisation);

export default router;
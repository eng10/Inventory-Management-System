import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt";

const prisma = new PrismaClient();

export interface Organisation {
    id: number;
    name: string;
    description?: string;
    logo?: string;
    email?: string;
    phone?: string;
    website?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    postalCode?: string;
    registrationNumber?: string;
    taxId?: string;
    foundedAt?: Date;
    industry?: string;
    employees?: number;
    socialLinks?: Record<string, string>;
    createdAt: Date;
    updatedAt: Date;
  }
  

export const createOrganisation = async (req: customuserRequest, res: any) => {
    try {
      if (req.user?.role !== "ADMIN") {
        return res.status(403).json({ message: "Access denied", isSuccess: false });
      }
  
      const {
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
        foundedAt,
        industry,
        employees,
        socialLinks,
        
      } = req.body .organisation;
  
      if (!name) {
        return res.status(400).json({ message: "Name is required", isSuccess: false });
      }
  
      const organisation = await prisma.organisation.create({
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
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong", isSuccess: false });
    }
  };

  
  export const getAllOrganisations = async (req: Request, res: any) => {
    try {
      const organisations = await prisma.organisation.findMany({
        orderBy: { createdAt: "desc" },
      });
  
      res.status(200).json({ organisations, isSuccess: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong", isSuccess: false });
    }
  };

  
  export const getOrganisationById = async (req: Request, res: any) => {
    try {
      const { id } = req.params;
  
      const organisation = await prisma.organisation.findUnique({
        where: { id: Number(id) },
      });
  
      if (!organisation) {
        return res.status(404).json({ message: "Organisation not found", isSuccess: false });
      }
  
      res.status(200).json({ organisation, isSuccess: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong", isSuccess: false });
    }
  };

  

  export const updateOrganisation = async (req: customuserRequest, res: any) => {
    try {
      if (req.user?.role !== "ADMIN") {
        return res.status(403).json({ message: "Access denied", isSuccess: false });
      }
  
      const { id } = req.params;
      const updates = req.body .Organisation;
  
      const organisation = await prisma.organisation.update({
        where: { id: Number(id) },
        data: updates,
      });
  
      res.status(200).json({ organisation, isSuccess: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong", isSuccess: false });
    }
  };

  
  export const deleteOrganisation = async (req: customuserRequest, res: any) => {
    try {
      if (req.user?.role !== "ADMIN") {
        return res.status(403).json({ message: "Access denied", isSuccess: false });
      }
  
      const { id } = req.params;
  
      await prisma.organisation.delete({
        where: { id: Number(id) },
      });
  
      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong", isSuccess: false });
    }
  };

  

  export const getFilteredOrganisations = async (req: Request, res: any) => {
    try {
      const { city, industry, country } = req.query;
  
      const organisations = await prisma.organisation.findMany({
        where: {
          city: city ? { equals: String(city), mode: "insensitive" } : undefined,
          industry: industry ? { equals: String(industry), mode: "insensitive" } : undefined,
          country: country ? { equals: String(country), mode: "insensitive" } : undefined,
        },
      });
  
      res.status(200).json({ organisations, isSuccess: true });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Something went wrong", isSuccess: false });
    }
  };
  
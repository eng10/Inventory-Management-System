import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt";
const prisma = new PrismaClient();

export const RegisterVendor = async (req: customuserRequest, res: any) => {
  try {
    const { name, contactInfo, email } = req.body;
    const CreateVendor = await prisma.vendor.create({
      data: {
        name,
        contactInfo,
        email,
        userUserId:req.user?.UserId,
      },
    });
    return res.status(201).json({
      message: "successfully created vendor",
      CreateVendor,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const UpdateVendor = async (req: customuserRequest, res: any) => {
  try {
    const { name, contactInfo, email, userUserId } = req.body;
    const { id } = req.params;
    const upd = await prisma.vendor.update({
      where: {
        VendorId: +id,
      },
      data: {
        name,
        contactInfo,
        email,
        userUserId: +userUserId,
      },
    });
    return res.status(201).json({
      message: "successfully updated this vendor",
      upd,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const allVendors = async (req: any, res: any) => {
  try {
    const Vendors = await prisma.vendor.findMany();
    return res.status(201).json(Vendors);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOneVendor = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const vendor = await prisma.vendor.findFirst({
      where: {
        VendorId: +id,
      },
    });
    return res.status(201).json(vendor);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const DeleteVendor = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const del = await prisma.vendor.delete({
      where: {
        VendorId: +id,
      },
    });
    return res.status(201).json(del);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt";
const prisma = new PrismaClient();

export const Registerinventory = async (req: customuserRequest, res: any) => {
  try {
    const { name, BranchId, userUserId, description } = req.body;
    const Createinventory = await prisma.inventory.create({
      data: {
        name,
        BranchId: +BranchId,
        userUserId:req.user?.UserId,
        description,
      },
    });
    return res.status(201).json({
      message: "successfully created ",
      Createinventory
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
// \\

export const Updateinventory = async (req: any, res: any) => {
  try {
    const { name, BranchId, userUserId, description } = req.body;
    const { id } = req.params;
    const upd = await prisma.inventory.update({
      where: {
        InventoryId: +id,
      },
      data: {
        name,
        BranchId: +BranchId,
        userUserId: +userUserId,
        description,
      },
    });
    return res.status(201).json({
      message: "successfully updated ",
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const allinventorys = async (req: any, res: any) => {
  try {
    const inventorys = await prisma.inventory.findMany();
    return res.status(201).json(inventorys);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOneinventory = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const inventory = await prisma.inventory.findFirst({
      where: {
        InventoryId: +id,
      },
    });
    return res.status(201).json(inventory);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const Deleteinventory = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const del = await prisma.inventory.delete({
      where: {
        InventoryId: +id,
      },
    });
    return res.status(201).json(del);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

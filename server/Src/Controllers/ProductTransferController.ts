import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const RegisterproductTransfer = async (req: any, res: any) => {
  try {
    const {
      quantity,
      FromBranchId,
      ProductId,
      ToBranchId,
      userUserId,
      TransferId,
    } = req.body;
    const CreateproductTransfer = await prisma.productTransfer.create({
      data: {
        quantity: +quantity,
        FromBranchId: +FromBranchId,
        ProductId: +ProductId,
        ToBranchId: +ToBranchId,
        userUserId: +userUserId,
        TransferId: +TransferId,
      },
    });
    return res.status(201).json({
      message: "successfully created productTransfer",
      CreateproductTransfer,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const UpdateproductTransfer = async (req: any, res: any) => {
  try {
    const {
      quantity,
      FromBranchId,
      ProductId,
      ToBranchId,
      userUserId,
      TransferId,
    } = req.body;
    const { id } = req.params;
    const upd = await prisma.productTransfer.update({
      where: {
        TransferId: +id,
      },
      data: {
        quantity: +quantity,
        FromBranchId: +FromBranchId,
        ProductId: +ProductId,
        ToBranchId: +ToBranchId,
        userUserId: +userUserId,
        TransferId: +TransferId,
      },
    });
    return res.status(201).json({
      message: "successfully updated this productTransfer",
      upd,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const allproductTransfers = async (req: any, res: any) => {
  try {
    const productTransfers = await prisma.productTransfer.findMany();
    return res.status(201).json(productTransfers);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOneproductTransfer = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const productTransfer = await prisma.productTransfer.findFirst({
      where: {
        TransferId: +id,
      },
    });
    return res.status(201).json(productTransfer);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const DeleteproductTransfer = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const del = await prisma.productTransfer.delete({
      where: {
        TransferId: +id,
      },
    });
    return res.status(201).json(del);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

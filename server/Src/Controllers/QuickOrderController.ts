import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const RegisterquickOrder = async (req: any, res: any) => {
  try {
    const {
      quantity,
      totalPrice,
      CustomerId,
      ProductId,
      QuickOrderId,
      userUserId,
    } = req.body;
    const CreatequickOrder = await prisma.quickOrder.create({
      data: {
        quantity: +quantity,
        totalPrice: +totalPrice,
        CustomerId: +CustomerId,
        ProductId: +ProductId,
        QuickOrderId: +QuickOrderId,
        userUserId: +userUserId,
      },
    });
    return res.status(201).json({
      message: "successfully created quickOrder",
      CreatequickOrder,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const UpdatequickOrder = async (req: any, res: any) => {
  try {
    const {
      quantity,
      totalPrice,
      CustomerId,
      ProductId,
      QuickOrderId,
      userUserId,
    } = req.body;
    const { id } = req.params;
    const upd = await prisma.quickOrder.update({
      where: {
        QuickOrderId: +id,
      },
      data: {
        quantity: +quantity,
        totalPrice: +totalPrice,
        CustomerId: +CustomerId,
        ProductId: +ProductId,
        QuickOrderId: +QuickOrderId,
        userUserId: +userUserId,
      },
    });
    return res.status(201).json({
      message: "successfully updated this quickOrder",
      upd,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const allquickOrders = async (req: any, res: any) => {
  try {
    const quickOrders = await prisma.quickOrder.findMany();
    return res.status(201).json(quickOrders);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOnequickOrder = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const quickOrder = await prisma.quickOrder.findFirst({
      where: {
        QuickOrderId: +id,
      },
    });
    return res.status(201).json(quickOrder);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const DeletequickOrder = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const del = await prisma.quickOrder.delete({
      where: {
        QuickOrderId: +id,
      },
    });
    return res.status(201).json(del);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

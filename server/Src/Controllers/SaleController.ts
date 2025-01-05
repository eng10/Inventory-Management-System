import { PrismaClient } from "@prisma/client";
import {Request,Response} from "express";
import { customuserRequest } from "../helpers/secure/jwt";
const prisma=new PrismaClient();

export const Registersale = async (req: customuserRequest, res: any) => {
  try {
    const { quantity, totalAmount, CustomerId, ProductId } =
      req.body;
    const Createsale = await prisma.sale.create({
      data: {
        quantity: +quantity,
        totalAmount: +totalAmount,
        CustomerId: +CustomerId,
        ProductId: +ProductId,
        userUserId:req.user?.UserId,
      },
    });
    return res.status(201).json({
      message: "successfully created ",
      ...Createsale
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const Updatesale = async (req: customuserRequest, res: any) => {
  try {
    const { quantity, totalAmount, CustomerId, ProductId, userUserId } =
      req.body;
    const { id } = req.params;
    const upd = await prisma.sale.update({
      where: {
        SaleId: +id,
      },
      data: {
        quantity: +quantity,
        totalAmount: +totalAmount,
        CustomerId: +CustomerId,
        ProductId: +ProductId,
        userUserId:req.user?.UserId,
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
export const allsales = async (req: any, res: any) => {
  try {
    const sales = await prisma.sale.findMany();
    return res.status(201).json(sales);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOnesale = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const sale = await prisma.sale.findFirst({
      where: {
        SaleId: +id,
      },
    });
    return res.status(201).json(sale);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const Deletesale = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const del = await prisma.sale.delete({
      where: {
        SaleId: +id,
      },
    });
    return res.status(201).json(del);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

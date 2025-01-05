import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt";

const prisma = new PrismaClient();

export const Registeraccounting = async (
  req: customuserRequest,
  res: any
): Promise<void> => {
  try {
    const { accountName, accountType } = req.body;
    const Createaccounting = await prisma.accounting.create({
      data: {
        accountName,
        accountType,
        userUserId:req.user?.UserId,
      },
    });
    res.status(201).json({
      message: "successfully created accounting",
      Createaccounting,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const Updateaccounting = async (req: customuserRequest, res: any): Promise<void> => {
  try {
    const { accountName, accountType } = req.body;
    const { id } = req.params;
    const upd = await prisma.accounting.update({
      where: {
        AccountingId: +id,
      },
      data: {
        accountName,
        accountType,
        userUserId:req.user?.UserId,
      },
    });
    res.status(200).json({
      message: "successfully updated this accounting",
      upd,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const allaccountings = async (req: Request, res: any): Promise<void> => {
  try {
    const accountings = await prisma.accounting.findMany();
    res.status(200).json(accountings);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const getOneaccounting = async (req: Request, res: any): Promise<void> => {
  try {
    const { id } = req.params;
    const accounting = await prisma.accounting.findFirst({
      where: {
        AccountingId: +id,
      },
    });
    res.status(200).json(accounting);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const Deleteaccounting = async (req: Request, res: any): Promise<void> => {
  try {
    const { id } = req.params;
    const del = await prisma.accounting.delete({
      where: {
        AccountingId: +id,
      },
    });
    res.status(200).json(del);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
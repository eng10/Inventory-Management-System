import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt";
const prisma = new PrismaClient();

export const RegisteraccountTransfer = async (
  req: customuserRequest,
  res: any
): Promise<void> => {
  try {
    const { amount, type,  ToAccountId, FromAccountId } = req.body;
    const CreateaccountTransfer = await prisma.accountTransfer.create({
      data: {
        amount: +amount,
        type,
        userUserId:req.user?.UserId,
        ToAccountId: +ToAccountId,
        FromAccountId: +FromAccountId,
      },
    });
    res.status(201).json({
      message: "successfully created accountTransfer",
      CreateaccountTransfer,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const UpdateaccountTransfer = async (
  req: customuserRequest,
  res: any
): Promise<void> => {
  try {
    const { amount, type,  ToAccountId, FromAccountId } = req.body;
    const { id } = req.params;
    const upd = await prisma.accountTransfer.update({
      where: {
        TransferId: +id,
      },
      data: {
        amount: +amount,
        type,
        userUserId:req.user?.UserId,
        ToAccountId: +ToAccountId,
        FromAccountId: +FromAccountId,
      },
    });
    res.status(201).json({
      message: "successfully updated this accountTransfer",
      upd,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const allaccountTransfers = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const accountTransfers = await prisma.accountTransfer.findMany();
    res.status(201).json(accountTransfers);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOneaccountTransfer = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const { id } = req.params;
    const accountTransfer = await prisma.accountTransfer.findFirst({
      where: {
        TransferId: +id,
      },
    });
    res.status(201).json(accountTransfer);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const DeleteaccountTransfer = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const { id } = req.params;
    const del = await prisma.accountTransfer.delete({
      where: {
        TransferId: +id,
      },
    });
    res.status(201).json(del);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

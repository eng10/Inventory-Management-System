import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt";
const prisma = new PrismaClient();

interface Expenseinterface {
  description: String;
  amount: number;
}

export const Registerexpense = async (req: customuserRequest, res: any) => {
  try {
    const { amount, description } = req.body.Expenseinterface;
    const Createexpense = await prisma.expense.create({
      data: {
        amount: +amount,
        description,
        userUserId:req.user?.UserId,
      },
    });
    return res.status(201).json({
      message: "successfully created expense",
      Createexpense,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const Updateexpense = async (req: customuserRequest, res: any) => {
  try {
    const { amount, description } = req.body;
    const { id } = req.params;
    const upd = await prisma.expense.update({
      where: {
        ExpenseId: +id,
      },
      data: {
        amount: +amount,
        description,
        userUserId:req.user?.UserId,
      },
    });
    return res.status(201).json({
      message: "successfully updated this expense",
      upd,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const allexpenses = async (req: any, res: any) => {
  try {
    const expenses = await prisma.expense.findMany();
    return res.status(201).json(expenses);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOneexpense = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const expense = await prisma.expense.findFirst({
      where: {
        ExpenseId: +id,
      },
    });
    return res.status(201).json(expense);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const Deleteexpense = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const del = await prisma.expense.delete({
      where: {
        ExpenseId: +id,
      },
    });
    return res.status(201).json(del);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const RegistershiftCategory = async (req: any, res: any) => {
  try {
    const { name } = req.body;
    const CreateshiftCategory = await prisma.shiftCategory.create({
      data: {
        name,
      },
    });
    return res.status(201).json({
      message: "successfully created shiftCategory",
      CreateshiftCategory,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const UpdateshiftCategory = async (req: any, res: any) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const upd = await prisma.shiftCategory.update({
      where: {
        ShiftCategoryId: +id,
      },
      data: {
        name,
      },
    });
    return res.status(201).json({
      message: "successfully updated this shiftCategory",
      upd,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const allshiftCategorys = async (req: any, res: any) => {
  try {
    const shiftCategorys = await prisma.shiftCategory.findMany();
    return res.status(201).json(shiftCategorys);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOneshiftCategory = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const shiftCategory = await prisma.shiftCategory.findFirst({
      where: {
        ShiftCategoryId: +id,
      },
    });
    return res.status(201).json(shiftCategory);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const DeleteshiftCategory = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const del = await prisma.shiftCategory.delete({
      where: {
        ShiftCategoryId: +id,
      },
    });
    return res.status(201).json(del);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

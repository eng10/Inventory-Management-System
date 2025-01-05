import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
const prisma = new PrismaClient();

export const RegisterworkShift = async (req: any, res: any) => {
  try {
    const { name, ShiftCategoryId } = req.body;
    const CreateworkShift = await prisma.workShift.create({
      data: {
        name,
        ShiftCategoryId: +ShiftCategoryId,
      },
    });
    return res.status(201).json({
      message: "successfully created workShift",
      CreateworkShift,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const UpdateworkShift = async (req: any, res: any) => {
  try {
    const { name, ShiftCategoryId } = req.body;
    const { id } = req.params;
    const upd = await prisma.workShift.update({
      where: {
        WorkShiftId: +id,
      },
      data: {
        name,
        ShiftCategoryId: +ShiftCategoryId,
      },
    });
    return res.status(201).json({
      message: "successfully updated this workShift",
      upd,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const allworkShifts = async (req: any, res: any) => {
  try {
    const workShifts = await prisma.workShift.findMany();
    return res.status(201).json(workShifts);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOneworkShift = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const workShift = await prisma.workShift.findFirst({
      where: {
        WorkShiftId: +id,
      },
    });
    return res.status(201).json(workShift);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const DeleteworkShift = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const del = await prisma.workShift.delete({
      where: {
        WorkShiftId: +id,
      },
    });
    return res.status(201).json(del);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

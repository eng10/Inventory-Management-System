import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt";
const prisma = new PrismaClient();

export const Registerdeemaployee = async (req: customuserRequest, res: any) => {
  try {
    const { name, BranchId, DepartmentId } = req.body;
    const Createdeemaployee = await prisma.employee.create({
      data: {
        name,
        BranchId: +BranchId,
        DepartmentId: +DepartmentId,
        userUserId:req.user?.UserId,
      },
    });
    return res.status(201).json({
      message: "successfully created employee",
      Createdeemaployee,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const Updatedeemaployee = async (req: customuserRequest, res: any) => {
  try {
    const { name, BranchId, DepartmentId } = req.body;
    const { id } = req.params;
    const upd = await prisma.employee.update({
      where: {
        EmployeeId: +id,
      },
      data: {
        name,
        BranchId: +BranchId,
        DepartmentId: +DepartmentId,
        userUserId:req.user?.UserId,
      },
    });
    return res.status(201).json({
      message: "successfully updated this employee",
      upd,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const alldeemaployees = async (req: any, res: any) => {
  try {
    const deemaployees = await prisma.employee.findMany();
    return res.status(201).json(deemaployees);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOnedeemaployee = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const employee = await prisma.employee.findFirst({
      where: {
        EmployeeId: +id,
      },
    });
    return res.status(201).json(employee);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const Deletedeemaployee = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const del = await prisma.employee.delete({
      where: {
        EmployeeId: +id,
      },
    });
    return res.status(201).json(del);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

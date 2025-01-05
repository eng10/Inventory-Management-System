import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt";
const prisma = new PrismaClient();

export const Registerdepartment = async (req: customuserRequest, res: any) => {
  try {
    const { name } = req.body;
    const Createdepartment = await prisma.department.create({
      data: {
        name,
        userUserId:req.user?.UserId,
      },
    });
    return res.status(201).json({
      message: "successfully created department",
      Createdepartment,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};


// azupdate
export const Updatedepartment = async (req: any, res: any) => {
  try {
    const { name } = req.body;
    const { id } = req.params;
    const upd = await prisma.department.update({
      where: {
        DepartmentId: +id,
      },
      data: {
        name,
      },
    });
    return res.status(201).json({
      message: "successfully updated this department",
      upd,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const alldepartments = async (req: any, res: any) => {
  try {
    const departments = await prisma.department.findMany();
    return res.status(201).json(departments);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOnedepartment = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const department = await prisma.department.findFirst({
      where: {
        DepartmentId: +id,
      },
    });
    return res.status(201).json(department);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const Deletedepartment = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const del = await prisma.department.delete({
      where: {
        DepartmentId: +id,
      },
    });
    return res.status(201).json(del);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

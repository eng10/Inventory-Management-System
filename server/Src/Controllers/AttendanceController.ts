import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt";
const prisma = new PrismaClient();

export const Registerattendance = async (
  req: customuserRequest,
  res: any
): Promise<void> => {
  try {
    const { date, status, employeeEmployeeId } = req.body;
    const Createattendance = await prisma.attendance.create({
      data: {
        date,
        status,
        employeeEmployeeId: +employeeEmployeeId,
      },
    });
    res.status(201).json({
      message: "successfully created attendance",
      Createattendance,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const Updateattendance = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const { date, status, employeeEmployeeId } = req.body;
    const { id } = req.params;
    const upd = await prisma.attendance.update({
      where: {
        AttendanceId: +id,
      },
      data: {
        date,
        status,
        employeeEmployeeId: +employeeEmployeeId,
      },
    });
    res.status(201).json({
      message: "successfully updated this attendance",
      upd,
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const allattendances = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const attendances = await prisma.attendance.findMany();
    res.status(201).json(attendances);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOneattendance = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const { id } = req.params;
    const attendance = await prisma.attendance.findFirst({
      where: {
        AttendanceId: +id,
      },
    });
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const Deleteattendance = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const { id } = req.params;
    const del = await prisma.attendance.delete({
      where: {
        AttendanceId: +id,
      },
    });
    res.status(201).json(del);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

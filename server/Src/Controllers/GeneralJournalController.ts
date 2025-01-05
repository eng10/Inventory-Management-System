import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt";
const prisma = new PrismaClient();

export const RegistergeneralJournal = async (req: customuserRequest, res: any) => {
  try {
    const { description } = req.body;
    const CreategeneralJournal = await prisma.generalJournal.create({
      data: {
        description,
        userUserId:req.user?.UserId,
      },
    });
    return res.status(201).json({
      message: "successfully created generalJournal",
      CreategeneralJournal,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const UpdategeneralJournal = async (req: customuserRequest, res: any) => {
  try {
    const { userUserId, description } = req.body;
    const { id } = req.params;
    const upd = await prisma.generalJournal.update({
      where: {
        GeneralJournalId: +id,
      },
      data: {
        description,
        userUserId:req.user?.UserId,
      },
    });
    return res.status(201).json({
      message: "successfully updated this generalJournal",
      upd,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const allgeneralJournals = async (req: any, res: any) => {
  try {
    const generalJournals = await prisma.generalJournal.findMany();
    return res.status(201).json(generalJournals);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOnegeneralJournal = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const generalJournal = await prisma.generalJournal.findFirst({
      where: {
        GeneralJournalId: +id,
      },
    });
    return res.status(201).json(generalJournal);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const DeletegeneralJournal = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const del = await prisma.generalJournal.delete({
      where: {
        GeneralJournalId: +id,
      },
    });
    return res.status(201).json(del);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

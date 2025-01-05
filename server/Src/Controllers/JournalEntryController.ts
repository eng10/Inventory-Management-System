import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt";
const prisma = new PrismaClient();

export const RegisterjournalEntry = async (req: customuserRequest, res: any) => {
  try {
    const {
      amount,
      description,
      AccountId,
      userUserId,
      generalJournalGeneralJournalId,
    } = req.body;
    const CreatejournalEntry = await prisma.journalEntry.create({
      data: {
        amount: +amount,
        description,
        AccountId: +AccountId,
        userUserId:req.user?.UserId,
        generalJournalGeneralJournalId: +generalJournalGeneralJournalId,
      },
    });
    return res.status(201).json({
      message: "successfully created journalEntry",
      CreatejournalEntry,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const UpdatejournalEntry = async (req: customuserRequest, res: any) => {
  try {
    const {
      amount,
      description,
      AccountId,
      generalJournalGeneralJournalId,
    } = req.body;
    const { id } = req.params;
    const upd = await prisma.journalEntry.update({
      where: {
        JournalEntryId: +id,
      },
      data: {
        amount: +amount,
        description,
        AccountId: +AccountId,
        userUserId:req.user?.UserId,
        generalJournalGeneralJournalId: +generalJournalGeneralJournalId,
      },
    });
    return res.status(201).json({
      message: "successfully updated this journalEntry",
      upd,
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const alljournalEntrys = async (req: any, res: any) => {
  try {
    const journalEntrys = await prisma.journalEntry.findMany();
    return res.status(201).json(journalEntrys);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOnejournalEntry = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const journalEntry = await prisma.journalEntry.findFirst({
      where: {
        JournalEntryId: +id,
      },
    });
    return res.status(201).json(journalEntry);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const DeletejournalEntry = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const del = await prisma.journalEntry.delete({
      where: {
        JournalEntryId: +id,
      },
    });
    return res.status(201).json(del);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

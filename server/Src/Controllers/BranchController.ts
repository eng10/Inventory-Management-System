import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt"; // Assuming this contains user info

const prisma = new PrismaClient();

// Register Branch

interface branchinterface {
  name: string;
  address: string;
}

export const Registerbranch = async (
  req: customuserRequest,
  res: any
): Promise<void> => {
  try {
    const { address, name } = req.body as branchinterface;

    


    const Createbranch = await prisma.branch.create({
      data: {
        address,
        name,
        userUserId:req.user?.UserId,
      },
    });

    res.status(201).json({
      data: Createbranch,
      message: "Branch successfully created.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
};


// Update Branch
export const Updatebranch = async (
  req: customuserRequest,
  res: any
): Promise<void> => {
  try {
    const { address, name } = req.body;
    const { id } = req.params;

    if (!req.user || req.user.UserId === undefined) {
      res.status(400).json({ message: "User ID is required." });
      return;
    }

    const updatedBranch = await prisma.branch.update({
      where: {
        BranchId: +id,
      },
      data: {
        address,
        name,
        userUserId: req.user.UserId,
      },
    });

    res.status(200).json({
      data: updatedBranch,
      message: "Branch successfully updated.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
};

// Get All Branches
export const allbranchs = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const branches = await prisma.branch.findMany();
    res.status(200).json(branches);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
};

// Get One Branch
export const getOnebranch = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const { id } = req.params;
    const branch = await prisma.branch.findFirst({
      where: {
        BranchId: +id,
      },
    });

    if (!branch) {
      res.status(404).json({
        message: "Branch not found.",
      });
      return;
    }

    res.status(200).json(branch);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
};

// Delete Branch
export const Deletebranch = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedBranch = await prisma.branch.delete({
      where: {
        BranchId: +id,
      },
    });

    res.status(200).json({
      data: deletedBranch,
      message: "Branch successfully deleted.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong. Please try again.",
    });
  }
};

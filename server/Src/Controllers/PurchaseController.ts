import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt";

const prisma = new PrismaClient();

// Register a new purchase
export const Registerpurchase = async (req: customuserRequest, res: any) => {
  try {
    const {
      quantity,
      totalAmount,
      VendorId,
      PurchaseStatus = "PENDING", 
      
    } = req.body;

    const Createpurchase = await prisma.purchase.create({
      data: {
        quantity: +quantity,
        totalAmount: +totalAmount,
        productProductId:req.body.product,
        VendorId: +VendorId,
        PurchaseStatus,
        userUserId:req.user?.UserId,
      },
    });

    return res.status(201).json({
      message: "Successfully created purchase",
      Createpurchase,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong, please try again",
    });
  }
};

// Update a purchase
export const Updatepurchase = async (req: customuserRequest, res: any) => {
  try {
    const {
      quantity,
      totalAmount,
      VendorId,
      PurchaseStatus,
    } = req.body;
    const { id } = req.params;

    const updatedPurchase = await prisma.purchase.update({
      where: {
        PurchaseId: +id,
      },
      data: {
        quantity: +quantity,
        totalAmount: +totalAmount,
        productProductId: +req.body.prodectid,
        VendorId: +VendorId,
        PurchaseStatus,
        userUserId:req.user?.UserId,
      },
    });

    return res.status(200).json({
      message: "Successfully updated purchase",
      updatedPurchase,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong, please try again",
    });
  }
};

// Fetch all purchases
export const allpurchases = async (req: Request, res: any) => {
  try {
    const purchases = await prisma.purchase.findMany();
    return res.status(200).json(purchases);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong, please try again",
    });
  }
};

// Fetch a single purchase by ID
export const getOnepurchase = async (req: Request, res: any) => {
  try {
    const { id } = req.params;

    const purchase = await prisma.purchase.findFirst({
      where: {
        PurchaseId: +id,
      },
    });

    if (!purchase) {
      return res.status(404).json({
        message: "Purchase not found",
      });
    }

    return res.status(200).json(purchase);
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong, please try again",
    });
  }
};

// Delete a purchase
export const Deletepurchase = async (req: Request, res: any) => {
  try {
    const { id } = req.params;

    const deletedPurchase = await prisma.purchase.delete({
      where: {
        PurchaseId: +id,
      },
    });

    return res.status(200).json({
      message: "Successfully deleted purchase",
      deletedPurchase,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Something went wrong, please try again",
    });
  }
};

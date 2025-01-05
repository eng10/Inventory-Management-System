import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt";
const prisma = new PrismaClient();

export const Registerproduct = async (req: customuserRequest, res: any) => {
  try {
    const { name, price, quantity,  description, userUserId } =
      req.body;
    const Createproduct = await prisma.product.create({
      data: {
        name,
        price,
        quantity,
        CategoryId:req.body.categoryid,
        description,
        userUserId:req.user?.UserId,
      },
    });
    return res.status(201).json({
      message: "successfully created ",
      Createproduct
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const Updateproduct = async (req: customuserRequest, res: any) => {
  try {
    const { name, price, quantity,  description } =
      req.body;
    const { id } = req.params;
    const updateprodect = await prisma.product.update({
      where: {
        ProductId: +id,
      },
      data: {
        name,
        price,
        quantity,
        CategoryId:req.body.categoryid,
        description,
        userUserId:req.user?.UserId,
      },
    });
    return res.status(201).json({
      message: "successfully updated ",
      ...updateprodect
    });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const allproducts = async (req: any, res: any) => {
  try {
    const products = await prisma.product.findMany();
    return res.status(201).json(products);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOneproduct = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findFirst({
      where: {
        ProductId: +id,
      },
    });
    return res.status(201).json(product);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const Deleteproduct = async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const del = await prisma.product.delete({
      where: {
        ProductId: +id,
      },
    });
    return res.status(201).json(del);
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

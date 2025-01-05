import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt";

const prisma = new PrismaClient();

interface ProductCategory {
  CategoryId: number;
  name: string;
  description?: string;
}

// Register a new ProductCategory
export const registerProductCategory = async (
  req: customuserRequest,
  res: any
): Promise<void> => {
  try {
    const { name, description } = req.body;

    const createdProduct = await prisma.productCategory.create({
        data: {
            name,
            description,
            userUserId: req.user?.UserId,
        },
      });

    res.status(201).json({
      message: "Product category created successfully",
      productCategory: createdProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while creating the product category. Please try again.",
    });
  }
};

// Update an existing ProductCategory
export const updateProductCategory = async (
  req: customuserRequest,
  res: any
): Promise<void> => {
  try {
    const { name, description } = req.body;
    const { id } = req.params;

    const updatedProductCategory = await prisma.productCategory.update({
      where: { CategoryId: +id },
      data: {
        name,
        description,
        userUserId: req.user?.UserId,
      },
    });

    res.status(200).json({
      message: "Product category updated successfully",
      productCategory: updatedProductCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while updating the product category. Please try again.",
    });
  }
};

// Get all ProductCategories
export const getAllProductCategories = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const productCategories = await prisma.productCategory.findMany();
    res.status(200).json(productCategories);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while retrieving product categories. Please try again.",
    });
  }
};

// Get a single ProductCategory by ID
export const getProductCategoryById = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const { id } = req.params;

    const productCategory = await prisma.productCategory.findFirst({
      where: { CategoryId: +id },
    });

    

    res.status(200).json(productCategory);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while retrieving the product category. Please try again.",
    });
  }
};

// Delete a ProductCategory by ID
export const deleteProductCategory = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedProductCategory = await prisma.productCategory.delete({
      where: { CategoryId: +id },
    });

    res.status(200).json({
      message: "Product category deleted successfully",
      productCategory: deletedProductCategory,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "An error occurred while deleting the product category. Please try again.",
    });
  }
};

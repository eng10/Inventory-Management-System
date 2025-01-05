import { PrismaClient } from '@prisma/client'
import { Request, Response, response } from 'express'
import { customuserRequest } from '../helpers/secure/jwt';
const prisma = new PrismaClient()
interface CustomerInterface {
  name: string;
  email: string;
  phone: string;
  address: string;
}

// Register a new customer
export const Registercustomer = async (
  req: customuserRequest,
  res: any
) => {
  try {
    const { address, email, phone, name } = req.body as CustomerInterface;

    if (!name) {
      return res.status(400).json({
        message: "Please provide all required fields.",
        isSuccess: false,
      });
    }

    const newCustomer = await prisma.customer.create({
      data: {
        address,
        email,
        phone,
        name,
        userUserId:req.user?.UserId,
      },
    });

    return res.status(201).json({
      message: "Customer created successfully.",
      newCustomer,
    });
  } catch (error) {
    console.error("Error registering customer:", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      isSuccess: false,
    });
  }
};

// Update an existing customer
export const Updatecustomer = async (req: customuserRequest, res: any) => {
  try {
    const { address, email, phone, name } = req.body as CustomerInterface;
    const { id } = req.params;

    if (!address || !email || !phone || !name) {
      return res.status(400).json({
        message: "Please provide all required fields.",
        isSuccess: false,
      });
    }

    const updatedCustomer = await prisma.customer.update({
      where: { CustomerId: +id },
      data: {
        address,
        email,
        phone,
        name,
        userUserId:req.user?.UserId,
      },
    });

    return res.status(200).json({
      message: "Customer updated successfully.",
      updatedCustomer,
    });
  } catch (error) {
    console.error("Error updating customer:", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      isSuccess: false,
    });
  }
};

// Retrieve all customers
export const allcustomers = async (req: Request, res: any) => {
  try {
    const customers = await prisma.customer.findMany();
    return res.status(200).json(customers);
  } catch (error) {
    console.error("Error fetching customers:", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      isSuccess: false,
    });
  }
};

// Retrieve a single customer by ID
export const getOnecustomer = async (req: Request, res: any) => {
  try {
    const { id } = req.params;

    const customer = await prisma.customer.findFirst({
      where: { CustomerId: +id },
    });

    if (!customer) {
      return res.status(404).json({
        message: `Customer with ID ${id} not found.`,
        isSuccess: false,
      });
    }

    return res.status(200).json(customer);
  } catch (error) {
    console.error("Error fetching customer:", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      isSuccess: false,
    });
  }
};

// Delete a customer
export const Deletecustomer = async (req: Request, res: any) => {
  try {
    const { id } = req.params;

    const deletedCustomer = await prisma.customer.delete({
      where: { CustomerId: +id },
    });

    return res.status(200).json({
      message: "Customer deleted successfully.",
      deletedCustomer,
    });
  } catch (error) {
    console.error("Error deleting customer:", error);
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      isSuccess: false,
    });
  }
};

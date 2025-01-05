import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest, generateToken } from "../helpers/secure/jwt";
import bcrypt from "bcryptjs"; // Corrected import

const prisma = new PrismaClient();

export const RegisterUser = async (req: customuserRequest, res: any) => {
  try {
    const { email, name, password } = req.body;

    if (!email || !name || !password) {
      return res.status(400).json({
        isSuccess: false,
        message: "Please provide info",
      });
    }

    //checking email

    const useremail = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (useremail) {
      return res.status(400).json({
        isSuccess: false,
        message: "email is already used",
      });
    }

    //hashpass

    const hashpass = bcrypt.hashSync(password);

    //create email

    const newuser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashpass,
        role: req.body.role,
      },
      select: {
        UserId: true,
        email: true,
        role: true,
      },
    });

    res.json({
      isSuccess: true,
      result: { ...newuser },
    });
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};

export const login = async (req: any, res: any) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        isSuccess: false,
        message: "Please provide email and password",
      });
    }

    const user = await prisma.user.findFirst({
      where: { email },
    });

    if (!user) {
      return res.status(400).json({
        isSuccess: false,
        message: "Invalid email or password",
      });
    }

    // Verify password
    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({
        isSuccess: false,
        message: "Invalid email or password",
      });
    }

    // Generate token
    const token = generateToken({
      UserId: user.UserId,
      email: user.email,
      role: user.role,
    });

    const result = {
      email: user.email,
      name: user.name,
      role: user.role,
      token,
    };

    return res.status(200).json({
      result,
      isSuccess: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      error: (error as Error).message,
    });
  }
};

export const UpdateUser = async (req: any, res: any) => {
  try {
    const { email, name, password } = req.body;
    const { id } = req.params;

    const hashedPassword = password ? bcrypt.hashSync(password, 10) : undefined;

    const updatedUser = await prisma.user.update({
      where: { UserId: Number(id) },
      data: {
        email,
        name,
        ...(hashedPassword && { password: hashedPassword }), // Only update password if provided
      },
    });

    return res.status(200).json({
      message: "User updated successfully",
      user: {
        id: updatedUser.UserId,
        email: updatedUser.email,
        name: updatedUser.name,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      error: (error as Error).message,
    });
  }
};

export const allUsers = async (req: any, res: any) => {
  try {
    const users = await prisma.user.findMany({
      select: { UserId: true, email: true, name: true, role: true }, // Exclude sensitive data
    });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      error: (error as Error).message,
    });
  }
};

export const getOneUser = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    const user = await prisma.user.findFirst({
      where: { UserId: Number(id) },
      select: { UserId: true, email: true, name: true, role: true }, // Exclude sensitive data
    });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      error: (error as Error).message,
    });
  }
};

export const DeleteUser = async (req: any, res: any) => {
  try {
    const { id } = req.params;

    await prisma.user.delete({
      where: { UserId: Number(id) },
    });

    return res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went wrong. Please try again.",
      error: (error as Error).message,
    });
  }
};

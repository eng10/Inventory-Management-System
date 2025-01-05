import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { customuserRequest } from "../helpers/secure/jwt";
const prisma = new PrismaClient();

export const Registerbooking = async (
  req: customuserRequest,
  res: any
): Promise<void> => {
  try {
    const { bookingDate, CustomerId,  ProductId } = req.body;
    const Createbooking = await prisma.booking.create({
      data: {
        bookingDate,
        CustomerId,
        userUserId:req.user?.UserId,
        ProductId,
      },
    });
    res.status(201).json({
      message: "successfully created ",
      ...Createbooking
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

export const Updatebooking = async (
  req: customuserRequest,
  res: any
): Promise<void> => {
  try {
    const { bookingDate, CustomerId,  ProductId } = req.body;
    const { id } = req.params;
    const upd = await prisma.booking.update({
      where: {
        BookingId: +id,
      },
      data: {
        bookingDate,
        CustomerId,
        userUserId:req.user?.UserId,
        ProductId,
      },
    });
    res.status(201).json({
      message: "successfully updated ",
    });
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const allbookings = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const bookings = await prisma.booking.findMany();
    res.status(201).json(bookings);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const getOnebooking = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const { id } = req.params;
    const booking = await prisma.booking.findFirst({
      where: {
        BookingId: +id,
      },
    });
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};
export const Deletebooking = async (
  req: Request,
  res: any
): Promise<void> => {
  try {
    const { id } = req.params;
    const del = await prisma.booking.delete({
      where: {
        BookingId: +id,
      },
    });
    res.status(201).json(del);
  } catch (error) {
    res.status(500).json({
      message: "something went wrong please try again",
    });
  }
};

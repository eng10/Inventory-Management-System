import { Router } from "express";
import {
  Deletebooking,
  Registerbooking,
  Updatebooking,
  allbookings,
  getOnebooking,
} from "../Controllers/BookingController";
const BookingRouter = Router();
BookingRouter.post("/register", Registerbooking);
BookingRouter.put("/update/:id", Updatebooking);
BookingRouter.delete("/delete/:id", Deletebooking);
BookingRouter.get("/:id", getOnebooking);
BookingRouter.get("/all", allbookings);
export default BookingRouter;

import { Router} from 'express';
import {
    getBookings,
    getBedrooms,
    getClients,
    createBooking,
    deleteBooking,
  } from "../controllers/bookings.controller.js";

const router = Router();

router.get("/clients", getClients);

router.get("/bedrooms", getBedrooms);

router.get("/bookings", getBookings);

router.post("/bookings", createBooking);

router.patch("/booking/:id", deleteBooking);

export default router;
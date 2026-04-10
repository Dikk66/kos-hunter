import prisma from "../config/db.js";

// CREATE BOOKING
export const createBooking = async (req, res) => {
  const { kosId, startDate, endDate } = req.body;

  const booking = await prisma.booking.create({
    data: {
      kosId: Number(kosId),
      userId: req.user.id,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      status: "pending",
    },
  });

  res.json(booking);
};

// GET BOOKING USER
export const getMyBooking = async (req, res) => {
  const bookings = await prisma.booking.findMany({
    where: { userId: req.user.id },
    include: { kos: true },
  });

  res.json(bookings);
};

// UPDATE STATUS (OWNER)
export const updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const booking = await prisma.booking.update({
    where: { id: Number(id) },
    data: { status },
  });

  res.json(booking);
};
const express = require("express");

const router = express.Router();

const {
  bookAppointment,
  getAppointments,
  getAppointmentById,
} = require("../controllers/appointment.controller");

router.post("/", bookAppointment);

router.get("/", getAppointments);

router.get("/:id", getAppointmentById);

module.exports = router;
const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Age: {
    type: String,
    required: true,
  },
  Symptoms: {
    type: String,
    required: true,
  },
  Doctor: {
    type: String,
    required: true,
  },
  Date: {
    type: String,
    required: true,
  },
  CovidStatus: {
    type: Boolean,
    required: true,
  },
});

const Appointment = mongoose.model("Appointment", AppointmentSchema);
module.exports = Appointment;

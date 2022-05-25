const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
  PatientName: {
    type: String,
    required: true,
  },
  PatientAppointment: {
    type: String,
    required: true,
  },
});

const Patient = mongoose.model("Patient", PatientSchema);
module.exports = Patient;

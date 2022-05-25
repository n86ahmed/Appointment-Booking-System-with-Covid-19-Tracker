const express = require("express");
var cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

const AppointmentModel = require("./models/Appointment");

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

mongoose.connect(
  "mongodb+srv://admin:admin@crud.ergn0.mongodb.net/Patient?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/api/appointments", async (req, res) => {
  const aptn = await AppointmentModel.find({});

  try {
    res.send(aptn);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.post("/api/new", async (req, res) => {
  const aptn = new AppointmentModel(req.body);

  try {
    await aptn.save();
    console.log(req.body);
    res.send(req.body);
  } catch (err) {
    console.log(err);
  }
});

app.delete("/api/delete", async (req, res) => {
  try {
    const aptn = await AppointmentModel.findByIdAndDelete(req.body.id);
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(3001, () => {
  console.log("Server running on port 3001...");
});

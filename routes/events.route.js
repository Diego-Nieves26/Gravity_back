const express = require("express");

// Controllers
const {
  createEvent,
  getAllEventData,
} = require("../controllers/eventData.controller");

// Middlewares
const {
  createEventValidators,
} = require("../middlewares/validators.middleware");

const eventsRoute = express.Router();

eventsRoute.get("/", getAllEventData);

eventsRoute.post("/", createEventValidators, createEvent);

module.exports = { eventsRoute };

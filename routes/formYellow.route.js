const express = require("express");

// Controllers
const {
  createFormYellow,
  getAllFormYellow,
} = require("../controllers/formYellow.controller");

// Middlewares
const {
  createFormYellowValidators,
} = require("../middlewares/validators.middleware");

const formYellowRoute = express.Router();

formYellowRoute.get("/", getAllFormYellow);

formYellowRoute.post("/", createFormYellowValidators, createFormYellow);

module.exports = { formYellowRoute };

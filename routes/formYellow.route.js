const express = require("express");

// Controllers
const { createFormYellow } = require("../controllers/formYellow.controller");

// Middlewares
const {
  createFormYellowValidators,
} = require("../middlewares/validators.middleware");

const formYellowRoute = express.Router();

formYellowRoute.post("/", createFormYellowValidators, createFormYellow);

module.exports = { formYellowRoute };

const express = require("express");

// Controllers
const { createServiceForm } = require("../controllers/serviceForm.controller");

// Middlewares
const {
  createServiceFormValidators,
} = require("../middlewares/validators.middleware");

const serviceFormRoute = express.Router();

serviceFormRoute.post("/", createServiceFormValidators, createServiceForm);

module.exports = { serviceFormRoute };

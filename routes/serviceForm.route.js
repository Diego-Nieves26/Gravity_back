const express = require("express");

// Controllers
const { createServiceForm, getAllServiceForm } = require("../controllers/serviceForm.controller");

// Middlewares
const {
  createServiceFormValidators,
} = require("../middlewares/validators.middleware");

const serviceFormRoute = express.Router();

serviceFormRoute.get("/", getAllServiceForm);

serviceFormRoute.post("/", createServiceFormValidators, createServiceForm);

module.exports = { serviceFormRoute };

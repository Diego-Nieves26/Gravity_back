const express = require("express");

// Controllers
const { createSuscribe } = require("../controllers/suscribe.controller");

// Middlewares
const {
  createSuscribeValidators,
} = require("../middlewares/validators.middleware");

const suscribeRoute = express.Router();

suscribeRoute.post("/", createSuscribeValidators, createSuscribe);

module.exports = { suscribeRoute };

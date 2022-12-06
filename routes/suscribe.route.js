const express = require("express");

// Controllers
const { createSuscribe, getAllSuscribe } = require("../controllers/suscribe.controller");

// Middlewares
const {
  createSuscribeValidators,
} = require("../middlewares/validators.middleware");

const suscribeRoute = express.Router();

suscribeRoute.get("/", getAllSuscribe);

suscribeRoute.post("/", createSuscribeValidators, createSuscribe);

module.exports = { suscribeRoute };

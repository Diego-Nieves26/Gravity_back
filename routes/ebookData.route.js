const express = require("express");

// Controllers
const { createEbookData } = require("../controllers/ebookData.controller");

// Middlewares
const {
  createEbookDataValidators,
} = require("../middlewares/validators.middleware");

const ebookDataRoute = express.Router();

ebookDataRoute.post("/", createEbookDataValidators, createEbookData);

module.exports = { ebookDataRoute };

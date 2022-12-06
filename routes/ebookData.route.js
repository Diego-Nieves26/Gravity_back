const express = require("express");

// Controllers
const {
  createEbookData,
  getAllEbookData,
} = require("../controllers/ebookData.controller");

// Middlewares
const {
  createEbookDataValidators,
} = require("../middlewares/validators.middleware");

const ebookDataRoute = express.Router();

ebookDataRoute.get("/", getAllEbookData);

ebookDataRoute.post("/", createEbookDataValidators, createEbookData);

module.exports = { ebookDataRoute };

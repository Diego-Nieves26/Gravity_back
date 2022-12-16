const { body, validationResult } = require("express-validator");

const { AppError } = require("../utils/appError.util");

const checkResult = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    // Array has errors
    const errorMsgs = errors.array().map((err) => err.msg);

    const message = errorMsgs.join(". ");

    return next(new AppError(message, 400));
  }

  next();
};

const createSuscribeValidators = [
  body("email").isEmail().withMessage("Must provide a valid email"),
  checkResult,
];

const createEbookDataValidators = [
  body("name").notEmpty().withMessage("Name cannot be empty"),
  body("email").isEmail().withMessage("Must provide a valid email"),
  body("advertising").notEmpty().withMessage("Advertising cannot be empty"),
  body("socialNetworks")
    .notEmpty()
    .withMessage("Social Networks cannot be empty"),
  body("webPage").notEmpty().withMessage("Web Page cannot be empty"),
  body("other").notEmpty().withMessage("Other cannot be empty"),
  checkResult,
];

const createFormYellowValidators = [
  body("name").notEmpty().withMessage("Name cannot be empty"),
  body("phone").notEmpty().withMessage("Phone cannot be empty"),
  body("email").isEmail().withMessage("Must provide a valid email"),
  checkResult,
];

const createServiceFormValidators = [
  body("name").notEmpty().withMessage("Name cannot be empty"),
  body("formName").notEmpty().withMessage("Form name cannot be empty"),
  body("telephone").notEmpty().withMessage("Telephone cannot be empty"),
  body("email").isEmail().withMessage("Must provide a valid email"),
  body("country").notEmpty().withMessage("Country cannot be empty"),
  checkResult,
];

const createEventValidators = [
  body("name").notEmpty().withMessage("Name cannot be empty"),
  body("phone").notEmpty().withMessage("Phone cannot be empty"),
  body("email").isEmail().withMessage("Must provide a valid email"),
  body("budget").notEmpty().withMessage("Budget cannot be empty"),
  body("date").notEmpty().withMessage("Date cannot be empty"),
  body("time").notEmpty().withMessage("Time cannot be empty"),
  checkResult,
];

module.exports = {
  createEventValidators,
  createSuscribeValidators,
  createEbookDataValidators,
  createFormYellowValidators,
  createServiceFormValidators,
};

// Models
const { Suscribe } = require("../models/suscribe.modal");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createSuscribe = catchAsync(async (req, res, next) => {
  const { email } = req.body;

  const newEmailSuscribe = await Suscribe.create({
    email,
  });

  res.status(201).json({
    status: "success",
    newEmailSuscribe,
  });
});

module.exports = {
  createSuscribe,
};

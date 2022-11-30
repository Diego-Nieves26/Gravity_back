// Models
const { Suscribe } = require("../models/suscribe.modal");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createSuscribe = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const emailExist = await Suscribe.findOne({ where: { email } });

  if (!emailExist) {
    await Suscribe.create({
      email,
    });
  }

  res.status(201).json({
    status: "success",
  });
});

module.exports = {
  createSuscribe,
};

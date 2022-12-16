// Models
const { Suscribe } = require("../models/suscribe.modal");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createSuscribe = catchAsync(async (req, res, next) => {
  const { email } = req.body;
  const emailExist = await Suscribe.findOne({
    where: { email, status: "active" },
  });

  if (!emailExist) {
    await Suscribe.create({
      email,
    });

    return res.status(201).json({
      status: "success",
      message: "El email fue guardado exitosamente.",
    });
  }

  res.status(201).json({
    status: "success",
    message: "El email ya fue guardado anteriormente.",
  });
});

const getAllSuscribe = catchAsync(async (req, res, next) => {
  const emails = await Suscribe.findAll({ where: { status: "active" } });

  res.status(201).json({
    status: "success",
    emails,
  });
});

module.exports = {
  createSuscribe,
  getAllSuscribe,
};

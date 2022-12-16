// Models
const { ServiceForm } = require("../models/serviceForm.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createServiceForm = catchAsync(async (req, res, next) => {
  const { formName, name, country, telephone, business, email } = req.body;
  const serviceFormExist = await ServiceForm.findOne({
    where: { email, status: "active" },
  });

  if (!serviceFormExist) {
    await ServiceForm.create({
      formName,
      name,
      country,
      telephone,
      business,
      email,
    });
  }

  res.status(201).json({
    status: "success",
  });
});

const getAllServiceForm = catchAsync(async (req, res, next) => {
  const serviceForms = await ServiceForm.findAll({
    where: { status: "active" },
  });

  res.status(201).json({
    status: "success",
    serviceForms,
  });
});

module.exports = {
  createServiceForm,
  getAllServiceForm,
};

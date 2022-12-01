// Models
const { ServiceForm } = require("../models/serviceForm.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createServiceForm = catchAsync(async (req, res, next) => {
  const { name, country, telephone, business, email } = req.body;
  const serviceFormExist = await ServiceForm.findOne({ where: { email } });

  if (!serviceFormExist) {
    await ServiceForm.create({
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

module.exports = {
  createServiceForm,
};

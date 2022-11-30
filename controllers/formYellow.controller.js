// Models
const { FormYellow } = require("../models/formYellow.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createFormYellow = catchAsync(async (req, res, next) => {
  const { name, phone, email } = req.body;
  const formYellowExist = await FormYellow.findOne({ where: { email } });

  if (!formYellowExist) {
    await FormYellow.create({
      name,
      phone,
      email,
    });
  }

  res.status(201).json({
    status: "success",
  });
});

module.exports = {
  createFormYellow,
};

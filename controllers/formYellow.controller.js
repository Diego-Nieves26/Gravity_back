// Models
const { FormYellow } = require("../models/formYellow.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { Email } = require("../utils/email.util");

const createFormYellow = catchAsync(async (req, res, next) => {
  const { name, phone, email, message } = req.body;
  const formYellowExist = await FormYellow.findOne({ where: { email } });

  if (!formYellowExist) {
    await FormYellow.create({
      name,
      phone,
      email,
    });
  }

  await new Email().sendWelcome({ name, email, message });

  res.status(201).json({
    status: "success",
  });
});

module.exports = {
  createFormYellow,
};

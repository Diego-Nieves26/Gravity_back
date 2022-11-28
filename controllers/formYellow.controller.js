// Models
const { FormYellow } = require("../models/formYellow.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");
const { Email } = require("../utils/email.util");

const createFormYellow = catchAsync(async (req, res, next) => {
  const { name, phone, email, message } = req.body;

  const newFormYellow = await FormYellow.create({
    name,
    phone,
    email,
  });

  console.log(message)

  await new Email().sendWelcome({ name, email, order: ""  });

  res.status(201).json({
    status: "success",
    newFormYellow,
  });
});

module.exports = {
  createFormYellow,
};

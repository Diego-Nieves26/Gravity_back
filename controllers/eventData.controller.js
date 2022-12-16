// Models
const { EventData } = require("../models/eventData.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createEvent = catchAsync(async (req, res, next) => {
  const { name, phone, email, budget, date, time } = req.body;
  const eventDataExist = await EventData.findOne({
    where: { email, status: "active" },
  });

  if (!eventDataExist) {
    await EventData.create({
      name,
      phone,
      email,
      budget,
      date, 
      time
    });
  }

  res.status(201).json({
    status: "success",
  });
});

const getAllEventData = catchAsync(async (req, res, next) => {
  const eventData = await EventData.findAll({ where: { status: "active" } });

  res.status(201).json({
    status: "success",
    eventData,
  });
});

module.exports = {
  createEvent,
  getAllEventData,
};

// Models
const { EbookData } = require("../models/ebookData.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createEbookData = catchAsync(async (req, res, next) => {
  const { name, email, advertising, socialNetworks, webPage, other } = req.body;
  const ebookDataExist = await EbookData.findOne({
    where: { email, status: "active" },
  });

  if (!ebookDataExist) {
    await EbookData.create({
      name,
      email,
      advertising,
      socialNetworks,
      webPage,
      other,
    });
  }

  res.status(201).json({
    status: "success",
  });
});

const getAllEbookData = catchAsync(async (req, res, next) => {
  const offerData = await EbookData.findAll({ where: { status: "active" } });

  res.status(201).json({
    status: "success",
    offerData,
  });
});

module.exports = {
  createEbookData,
  getAllEbookData,
};

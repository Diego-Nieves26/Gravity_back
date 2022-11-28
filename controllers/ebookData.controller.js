// Models
const { EbookData } = require("../models/ebookData.model");

// Utils
const { catchAsync } = require("../utils/catchAsync.util");

const createEbookData = catchAsync(async (req, res, next) => {
  const { name, email, advertising, socialNetworks, webPage, other } = req.body;

  const newEbookData = await EbookData.create({
    name,
    email,
    advertising,
    socialNetworks,
    webPage,
    other,
  });

  res.status(201).json({
    status: "success",
    newEbookData,
  });
});

module.exports = {
  createEbookData,
};

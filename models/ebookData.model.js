const { db, DataTypes } = require("../utils/database.util");

const EbookData = db.define(
  "ebookData",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    advertising: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    socialNetworks: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    webPage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    other: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "active",
    },
  },
  {
    tableName: "sbookData",
    timestamps: false,
  }
);

module.exports = { EbookData };

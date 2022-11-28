const { db, DataTypes } = require("../utils/database.util");

const Suscribe = db.define(
  "suscribe",
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "active",
    },
  },
  {
    tableName: "suscribe",
    timestamps: false,
  }
);

module.exports = { Suscribe };

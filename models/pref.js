const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Pref = sequelize.define(
  "preference",
  {
    pref_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
    },
    pref_name: { type: DataTypes.STRING, allowNull: false },
    pref_value: { type: DataTypes.STRING, allowNull: false },
    pref_ket: { type: DataTypes.TEXT, allowNull: false },
  },
  {
    tableName: "preference",
    timestamps: false,
  }
);

module.exports = Pref;

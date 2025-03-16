const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Data_pulau = sequelize.define(
  "data_pulau",
  {
    pulau_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    pulau_nama: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "data_pulau",
    timestamps: true,
  }
);

module.exports = Data_pulau;

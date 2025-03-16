const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");

const Data_provinsi = sequelize.define(
  "data_provinsi",
  {
    prov_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    pulau_id: { type: DataTypes.INTEGER, allowNull: false },
    prov_nama: { type: DataTypes.STRING, allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "data_provinsi",
    timestamps: true,
  }
);

module.exports = Data_provinsi;

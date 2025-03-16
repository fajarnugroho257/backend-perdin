const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Data_provinsi = require("./provinsi");
const Data_pulau = require("./pulau");
// const Perdin = require("./perdin");

const Data_kota = sequelize.define(
  "data_kota",
  {
    kota_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    prov_id: { type: DataTypes.INTEGER, allowNull: false },
    pulau_id: { type: DataTypes.INTEGER, allowNull: false },
    kota_nama: { type: DataTypes.STRING, allowNull: false },
    kota_latitude: { type: DataTypes.STRING, allowNull: false },
    kota_longitude: { type: DataTypes.STRING, allowNull: false },
    kota_st: { type: DataTypes.ENUM(["yes", "no"]), allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "data_kota",
    timestamps: true,
  }
);
// relasi ke provinsi
Data_provinsi.hasMany(Data_kota, { foreignKey: "prov_id", as: "data_kota" });
Data_kota.belongsTo(Data_provinsi, {
  foreignKey: "prov_id",
  as: "data_provinsi",
});
// relasi ke pulau
Data_pulau.hasMany(Data_kota, { foreignKey: "pulau_id", as: "pulau" });
Data_kota.belongsTo(Data_pulau, { foreignKey: "pulau_id", as: "data_pulau" });
//

module.exports = Data_kota;

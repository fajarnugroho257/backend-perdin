const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const Data_kota = require("./kota");

const Perdin = sequelize.define(
  "perdin",
  {
    perdin_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false,
    },
    user_id: { type: DataTypes.STRING, allowNull: false },
    pref_id: { type: DataTypes.STRING, allowNull: false },
    perdin_maksud: { type: DataTypes.STRING, allowNull: false },
    perdin_start: { type: DataTypes.DATE, allowNull: false },
    perdin_end: { type: DataTypes.DATE, allowNull: false },
    perdin_asal: { type: DataTypes.INTEGER, allowNull: false },
    perdin_tujuan: { type: DataTypes.INTEGER, allowNull: false },
    perdin_durasi: { type: DataTypes.STRING, allowNull: false },
    perdin_biaya: { type: DataTypes.STRING, allowNull: false },
    perdin_st: {
      type: DataTypes.ENUM(["waiting", "reject", "approve"]),
      allowNull: false,
    },
    perdin_saku: {
      type: DataTypes.ENUM(["yes", "no"]),
      allowNull: false,
    },
    createdAt: { type: DataTypes.DATE, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "perdin",
    timestamps: true,
  }
);
// relasi
Perdin.belongsTo(Data_kota, {
  foreignKey: "perdin_asal",
  targetKey: "kota_id",
  as: "asal",
});
Perdin.belongsTo(Data_kota, {
  foreignKey: "perdin_tujuan",
  targetKey: "kota_id",
  as: "tujuan",
});
module.exports = Perdin;

const { Sequelize, DataTypes } = require("sequelize");
const { sequelize } = require("../config/db");
const bcrypt = require("bcryptjs");

const users = sequelize.define(
  "User",
  {
    user_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    username: { type: DataTypes.STRING, allowNull: false, unique: true },
    password: { type: DataTypes.STRING, allowNull: false },
    nama: { type: DataTypes.STRING, allowNull: false },
    role: { type: DataTypes.ENUM(["pegawai", "sdm"]), allowNull: false },
    createdAt: { type: DataTypes.DATE, allowNull: true },
    updatedAt: { type: DataTypes.DATE, allowNull: true },
  },
  {
    tableName: "users",
    timestamps: true, // Sequelize otomatis menangani createdAt & updatedAt
  }
);

users.beforeCreate(async (user) => {
  user.password = await bcrypt.hash(user.password, 10);
});

users.beforeUpdate(async (user) => {
  if (user.changed("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
});

module.exports = users;

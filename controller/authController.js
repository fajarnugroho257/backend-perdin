const express = require("express");
const router = express.Router();
const User = require("../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.addNewUser = async (req, res) => {
  try {
    const { username, password, nama, role } = req.body;
    // cek user by username
    const userExists = await User.findOne({ where: { username } });
    if (userExists) {
      return res.json({ success: false, message: "Username sudah tersedia" });
    }
    const user_id = await newUserID();
    try {
      const newUser = await User.create({
        username,
        password,
        nama,
        user_id,
        role,
      });
      res.json({
        success: true,
        message: "User berhasil didaftarkan",
        user: newUser,
      });
    } catch (error) {
      if (error.name === "SequelizeUniqueConstraintError") {
        res.status(400).json({
          success: false,
          message: error.errors.map((err) => err.message),
        });
      } else {
        res.status(400).json({ success: false, message: "Error lain:", error });
      }
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ where: { username } });

    if (!user) {
      return res
        .status(200)
        .json({ success: false, message: "User tidak ditemukan" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .json({ success: false, message: "User tidak ditemukan" });
    }

    // Buat token JWT
    const token = jwt.sign(
      { user_id: user.user_id, nama: user.nama, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.json({
      success: true,
      message: "Login berhasil",
      token,
      userRole: user.role,
      user_nama: user.nama,
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const newUserID = async () => {
  const lastUser = await User.findOne({ order: [["user_id", "DESC"]] });
  let newId;
  const datePrefix = new Date().toISOString().slice(2, 10).replace(/-/g, "");

  if (!lastUser) {
    newId = `U${datePrefix}0001`;
  } else {
    const lastIdNumber = parseInt(lastUser.user_id.slice(-4), 10);
    newId = `U${datePrefix}${String(lastIdNumber + 1).padStart(4, "0")}`;
  }
  return newId;
};

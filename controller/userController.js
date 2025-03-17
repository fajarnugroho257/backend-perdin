const express = require("express");
const router = express.Router();
const User = require("../models/users");

// all data
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      order: [["nama", "ASC"]],
    });
    res.status(200).json({ success: true, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// detail data
exports.getUserById = async (req, res) => {
  try {
    const user = await User.findOne({
      where: { user_id: req.params.user_id },
      attributes: { exclude: ["password"] },
    });
    if (!user) {
      return res.json({ success: false, message: "Data tidak ditemukan" });
    }
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// store data
exports.storeData = async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create({
      where: { user_id: req.body },
    });
    res.status(200).json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// update user
exports.updateUser = async (req, res) => {
  try {
    // detail data by ID
    const detail = await User.findOne({
      where: { user_id: req.params.user_id },
    });
    if (!detail) {
      res.json({ success: false, message: "Data tidak ditemukan" });
    }
    // update
    await detail.update({
      username: req.body.username,
      nama: req.body.nama,
      role: req.body.role,
    });
    if (req.body.password) {
      await detail.update({
        password: req.body.password,
      });
    }
    res.status(200).json({
      success: true,
      message: "Sukses melakukan update data user",
      data: detail,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
// delete user
exports.deleteUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = await User.findOne({
      where: { user_id: user_id },
    });
    if (!user) {
      return res.json({ success: false, message: "Data tidak ditemukan" });
    }
    user.destroy();
    res.status(200).json({ success: true, message: "Data berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

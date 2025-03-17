const Kota = require("../models/kota");
const Data_provinsi = require("../models/provinsi");
const Data_pulau = require("../models/pulau");

// get all kota
exports.getAllkota = async (req, res) => {
  try {
    const allData = await Kota.findAll({
      include: [
        { model: Data_provinsi, as: "data_provinsi", required: true },
        { model: Data_pulau, as: "data_pulau", required: true },
      ],
      order: [["kota_nama", "ASC"]],
    });
    res.status(200).json({ success: true, data: allData, message: "suksess" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getDetailData = async (req, res) => {
  try {
    const detail = await Kota.findOne({
      where: { kota_id: req.params.kota_id },
    });
    if (!detail) {
      return res.json({ success: false, message: "Data tidak ditemukan" });
    }
    return res.status(200).json({
      success: true,
      message: "Data ditemukan",
      data: detail,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// store kota
exports.addNewKota = async (req, res) => {
  try {
    // data
    const {
      kota_nama,
      kota_latitude,
      kota_longitude,
      prov_id,
      pulau_id,
      kota_st,
    } = req.body;
    try {
      const newKota = await Kota.create({
        kota_nama,
        kota_latitude,
        kota_longitude,
        prov_id,
        pulau_id,
        kota_st,
      });
      res.status(201).json({
        success: true,
        message: "Kota berhasil didaftarkan",
        data: newKota,
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

// update kota
exports.updateKota = async (req, res) => {
  try {
    // detail data by ID
    const detail = await Kota.findOne({ where: { kota_id: req.params.id } });
    if (!detail) {
      res.json({ success: false, message: "Data tidak ditemukan" });
    }
    // update
    await detail.update({
      kota_nama: req.body.kota_nama,
      kota_latitude: req.body.kota_latitude,
      kota_longitude: req.body.kota_longitude,
      prov_id: req.body.prov_id,
      pulau_id: req.body.pulau_id,
      kota_st: req.body.kota_st,
    });
    res.status(200).json({
      success: true,
      message: "Sukses melakukan update data kota",
      data: detail,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// delete kota
exports.deleteKota = async (req, res) => {
  try {
    // detail data by ID
    const detail = await Kota.findOne({ where: { kota_id: req.params.id } });
    if (!detail) {
      res.json({ success: false, message: "Data tidak ditemukan" });
    }
    await detail.destroy().then();
    res.json({ message: "Data deleted successfully" });
  } catch (error) {}
};

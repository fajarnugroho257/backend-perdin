const Pulau = require("../models/pulau");

// get all pulau
exports.getAllPulau = async (req, res) => {
  try {
    const allData = await Pulau.findAll({ order: [["pulau_nama", "ASC"]] });
    res.status(200).json({ success: true, data: allData, message: "suksess" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
// detail pulau
exports.getDetailData = async (req, res) => {
  try {
    const detail = await Pulau.findOne({
      where: { pulau_id: req.params.pulau_id },
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

// store data
exports.storePulau = async (req, res) => {
  try {
    const { pulau_nama } = req.body;
    try {
      const newPulau = await Pulau.create({
        pulau_nama,
      });
      res.status(200).json({
        success: true,
        message: "Pulau berhasil didaftarkan",
        data: newPulau,
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
// update Pulau
exports.updatePulau = async (req, res) => {
  try {
    // detail data by ID
    const detail = await Pulau.findOne({
      where: { pulau_id: req.params.pulau_id },
    });
    if (!detail) {
      res.json({ success: false, message: "Data tidak ditemukan" });
    }
    // update
    await detail.update({
      pulau_nama: req.body.pulau_nama,
    });
    res.status(200).json({
      success: true,
      message: "Sukses melakukan update data pulau",
      data: detail,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// delete Pulau
exports.deletePulau = async (req, res) => {
  try {
    // detail data by ID
    const detail = await Pulau.findOne({
      where: { pulau_id: req.params.pulau_id },
    });
    if (!detail) {
      res.json({ success: false, message: "Data tidak ditemukan" });
    }
    await detail.destroy().then();
    res.json({ message: "Data berhasil dihapus" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

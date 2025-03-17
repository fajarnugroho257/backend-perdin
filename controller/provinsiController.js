const Provinsi = require("../models/provinsi");
const Data_pulau = require("../models/pulau");
// get all provinsi
exports.getAllProvinsiByPulau = async (req, res) => {
  try {
    const allData = await Provinsi.findAll({
      where: { pulau_id: req.params.pulau_id },
    });
    res.status(200).json({ success: true, data: allData, message: "suksess" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// get all provinsi
exports.getAllProvinsi = async (req, res) => {
  try {
    const allData = await Provinsi.findAll({
      include: [{ model: Data_pulau, required: true }],
      order: [["prov_nama", "ASC"]],
    });
    res.status(200).json({ success: true, data: allData, message: "suksess" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// detail provinsi
exports.getDetailData = async (req, res) => {
  try {
    const detail = await Provinsi.findOne({
      where: { prov_id: req.params.prov_id },
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
exports.storeProvinsi = async (req, res) => {
  try {
    const { pulau_id, prov_nama } = req.body;
    try {
      const newProvinsi = await Provinsi.create({
        pulau_id,
        prov_nama,
      });
      res.status(200).json({
        success: true,
        message: "Provinsi berhasil didaftarkan",
        data: newProvinsi,
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
// update Provinsi
exports.updateProvinsi = async (req, res) => {
  try {
    const { pulau_id, prov_nama } = req.body;
    // detail data by ID
    const detail = await Provinsi.findOne({
      where: { prov_id: req.params.prov_id },
    });
    if (!detail) {
      res.json({ success: false, message: "Data tidak ditemukan" });
    }
    // update
    await detail.update({
      pulau_id: pulau_id,
      prov_nama: prov_nama,
    });
    res.status(200).json({
      success: true,
      message: "Sukses melakukan update data Provinsi",
      data: detail,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// delete Provinsi
exports.deleteProvinsi = async (req, res) => {
  try {
    // detail data by ID
    const detail = await Provinsi.findOne({
      where: { prov_id: req.params.prov_id },
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

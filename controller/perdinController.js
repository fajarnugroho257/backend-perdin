const Data_kota = require("../models/kota");
const Perdin = require("../models/perdin");
const Pref = require("../models/pref");
const Users = require("../models/users");

exports.getAllData = async (req, res) => {
  try {
    const allData = await Perdin.findAll({
      where: { user_id: req.user.user_id },
      include: [
        { model: Data_kota, as: "asal", required: true },
        { model: Data_kota, as: "tujuan", required: true },
      ],
      order: [
        ["createdAt", "DESC"],
        ["perdin_start", "DESC"],
      ],
    });
    res.json({ success: true, data: allData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.getAllDataPersetujuan = async (req, res) => {
  try {
    const allData = await Perdin.findAll({
      include: [
        { model: Data_kota, as: "asal", required: true },
        { model: Data_kota, as: "tujuan", required: true },
        { model: Users, as: "user", required: true },
      ],
      order: [["createdAt", "DESC"]],
    });
    res.json({ success: true, data: allData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
// detail data perdin
exports.detailDataperdin = async (req, res) => {
  const { perdinID } = req.params;
  try {
    const detail = await Perdin.findOne({
      where: { perdin_id: perdinID },
      include: [
        { model: Data_kota, as: "asal", required: true },
        { model: Data_kota, as: "tujuan", required: true },
      ],
    });
    if (!detail) {
      return res.json({ success: false, message: "Data tidak ditemukan" });
    }
    res.json({
      success: true,
      data: detail,
      message: "Data berhasil ditemukan",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
// get pref data
exports.getPrefData = async (req, res) => {
  try {
    const allData = await Pref.findAll();
    res.json({ success: true, data: allData });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// update status
exports.updateStatusPerdin = async (req, res) => {
  const { perdinID, status } = req.params;
  try {
    const detail = await Perdin.findOne({
      where: { perdin_id: perdinID },
    });
    if (!detail) {
      return res.json({ success: false, message: "Data tidak ditemukan" });
    }
    detail.update({
      perdin_st: status,
    });
    res.json({
      success: true,
      data: detail,
      message: "Sukses melakukan persetujuan",
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// store Perdin
exports.addNewPerdin = async (req, res) => {
  try {
    // data
    const {
      pref_id,
      perdin_maksud,
      perdin_start,
      perdin_end,
      perdin_asal,
      perdin_tujuan,
      perdin_durasi,
      perdin_biaya,
      perdin_saku,
      perdin_st,
    } = req.body;
    try {
      const perdinID = await newPerdinID();
      const newperdin = await Perdin.create({
        perdin_id: perdinID,
        user_id: req.user.user_id,
        pref_id,
        perdin_maksud,
        perdin_start,
        perdin_end,
        perdin_asal,
        perdin_tujuan,
        perdin_durasi,
        perdin_biaya,
        perdin_saku,
        perdin_st,
      });
      res.status(201).json({
        success: true,
        message: "Perdin berhasil didaftarkan",
        data: newperdin,
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

// store Perdin
exports.updateDataPerdin = async (req, res) => {
  const { perdinID } = req.params;
  // return res.json({ data: req.body });
  try {
    const detail = await Perdin.findOne({
      where: { perdin_id: perdinID },
    });
    if (!detail) {
      return res.json({ success: false, message: "Data tidak ditemukan" });
    }
    detail.update({
      pref_id: req.body.pref_id,
      perdin_maksud: req.body.perdin_maksud,
      perdin_start: req.body.perdin_start,
      perdin_end: req.body.perdin_end,
      perdin_asal: req.body.perdin_asal,
      perdin_tujuan: req.body.perdin_tujuan,
      perdin_durasi: req.body.perdin_durasi,
      perdin_biaya: req.body.perdin_biaya,
      perdin_saku: req.body.perdin_saku,
      perdin_st: req.body.perdin_st,
    });
    res.json({
      success: true,
      data: detail,
      message: "Sukses melakukan update data perdin",
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
    res.status(500).json({ success: false, error: error.message });
  }
};

const newPerdinID = async () => {
  const lastperdin = await Perdin.findOne({ order: [["perdin_id", "DESC"]] });
  let newId;
  const datePrefix = new Date().toISOString().slice(2, 10).replace(/-/g, ""); // Format YYMMDD

  if (!lastperdin) {
    newId = `P${datePrefix}0001`;
  } else {
    const lastIdNumber = parseInt(lastperdin.perdin_id.slice(-4), 10);
    newId = `P${datePrefix}${String(lastIdNumber + 1).padStart(4, "0")}`;
  }
  return newId;
};

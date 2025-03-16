const Provinsi = require("../models/provinsi");

// get all provinsi
exports.getAllProvinsi = async (req, res) => {
  try {
    const allData = await Provinsi.findAll({
      where: { pulau_id: req.params.pulau_id },
    });
    res.status(200).json({ success: true, data: allData, message: "suksess" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

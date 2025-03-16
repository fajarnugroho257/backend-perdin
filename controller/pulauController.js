const Pulau = require("../models/pulau");

// get all pulau
exports.getAllPulau = async (req, res) => {
  try {
    const allData = await Pulau.findAll();
    res.status(200).json({ success: true, data: allData, message: "suksess" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

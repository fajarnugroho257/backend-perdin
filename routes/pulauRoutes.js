const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const PulauController = require("../controller/pulauController");
const { validatePulau } = require("../middleware/validation/validation");
// middleware
router.use(authMiddleware);

// route list
router.get("/", PulauController.getAllPulau);
router.post("/", validatePulau, PulauController.storePulau);
router.get("/detail/:pulau_id", PulauController.getDetailData);
router.put("/update/:pulau_id", validatePulau, PulauController.updatePulau);
router.delete("/delete/:pulau_id", PulauController.deletePulau);

module.exports = router;

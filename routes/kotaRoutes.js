const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const KotaController = require("../controller/kotaController");
const PulauController = require("../controller/pulauController");
const ProvinsiController = require("../controller/provinsiController");
const { validateKota } = require("../middleware/validation/validation");
// middleware
router.use(authMiddleware);

// route list
router.get("/", KotaController.getAllkota);
router.get("/detail/:kota_id", KotaController.getDetailData);
router.post("/", validateKota, KotaController.addNewKota);
router.put("/update/:id", validateKota, KotaController.updateKota);
router.delete("/delete/:id", KotaController.deleteKota);
// referensi data
router.get("/pulau", PulauController.getAllPulau);
router.get("/provinsi/:pulau_id", ProvinsiController.getAllProvinsiByPulau);

// router.post("/login", AuthController.login);

module.exports = router;

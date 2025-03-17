const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const ProvinsiController = require("../controller/provinsiController");
const { validateProvinsi } = require("../middleware/validation/validation");
// middleware
router.use(authMiddleware);

// route list
router.get("/", ProvinsiController.getAllProvinsi);
router.post("/", validateProvinsi, ProvinsiController.storeProvinsi);
router.get("/detail/:prov_id", ProvinsiController.getDetailData);
router.put(
  "/update/:prov_id",
  validateProvinsi,
  ProvinsiController.updateProvinsi
);
router.delete("/delete/:prov_id", ProvinsiController.deleteProvinsi);

module.exports = router;

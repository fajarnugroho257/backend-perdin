const express = require("express");
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");
const PerdinController = require("../controller/perdinController");
const { validatePerdin } = require("../middleware/validation/validation");
// middleware
router.use(authMiddleware);

// route list
router.get("/", PerdinController.getAllData);
router.get("/persetujuan", PerdinController.getAllDataPersetujuan);
router.get("/update/:perdinID/:status", PerdinController.updateStatusPerdin);
router.post("/", validatePerdin, PerdinController.addNewPerdin);
router.post(
  "/update-data-perdin/:perdinID",
  validatePerdin,
  PerdinController.updateDataPerdin
);
router.get("/pref", PerdinController.getPrefData);
router.get("/detail/:perdinID", PerdinController.detailDataperdin);

// router.post("/login", AuthController.login);

module.exports = router;

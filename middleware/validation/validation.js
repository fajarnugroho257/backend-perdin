const { body, validationResult } = require("express-validator");

exports.validateRegister = [
  body("username")
    .notEmpty()
    .isLength({ min: 3 })
    .withMessage("Nama minimal 3 karakter"),
  body("nama").notEmpty().withMessage("Nama wajib diisi"),
  body("role")
    .notEmpty()
    .isIn(["pegawai", "sdm"])
    .withMessage("Role wajib diisi"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password minimal 6 karakter"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// validasi data login
exports.validateLogin = [
  body("username").notEmpty().withMessage("Username wajib diisi"),
  body("password").notEmpty().withMessage("Password wajib diisi"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// validasi data kota
exports.validateKota = [
  body("kota_nama").notEmpty().withMessage("Nama Kota wajib diisi"),
  body("kota_latitude").notEmpty().withMessage("Latitude wajib diisi"),
  body("kota_longitude").notEmpty().withMessage("Longitude wajib diisi"),
  body("prov_id").notEmpty().withMessage("Provinsi wajib diisi"),
  body("pulau_id").notEmpty().withMessage("Pulau wajib diisi"),
  body("kota_st").isIn(["yes", "no"]).withMessage("Status wajib diisi"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

// validasi data perdin
exports.validatePerdin = [
  body("pref_id").notEmpty().withMessage("Pref wajib diisi"),
  body("perdin_maksud").notEmpty().withMessage("Maksud wajib diisi"),
  body("perdin_start").notEmpty().withMessage("Tanggal mulai wajib diisi"),
  body("perdin_end").notEmpty().withMessage("Tanggal selesai wajib diisi"),
  body("perdin_asal").notEmpty().withMessage("Asal wajib diisi"),
  body("perdin_tujuan").notEmpty().withMessage("Tujuan wajib diisi"),
  body("perdin_durasi").notEmpty().withMessage("Durasi wajib diisi"),
  body("perdin_biaya").notEmpty().withMessage("Biaya wajib diisi"),
  body("perdin_saku").isIn(["yes", "no"]).withMessage("Status wajib diisi"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

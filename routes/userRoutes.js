const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");
const authMiddleware = require("../middleware/authMiddleware");
const { validateUpdateUser } = require("../middleware/validation/validation");
// middleware
router.use(authMiddleware);

// route list
router.get("/", UserController.getAllUsers);
router.get("/detail/:user_id", UserController.getUserById);
router.put("/update/:user_id", validateUpdateUser, UserController.updateUser);
router.delete("/delete/:user_id", UserController.deleteUser);

module.exports = router;

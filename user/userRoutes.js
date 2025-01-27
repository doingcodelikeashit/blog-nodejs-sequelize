const express = require("express");
const router = express.Router();
const { authenticateJWT } = require("../middleware/auth");
const userController = require("./userController");
const validateRequest = require("../middleware/validationMiddleware");
const { addUserSchema, editUserSchema } = require("./userSchema");
router.post(
  "/createuser",
  validateRequest(addUserSchema),
  userController.createUser
);
router.post("/login", userController.login);
router.get("/getme", authenticateJWT(), userController.getMe);
router.post(
  "/updateuser",
  authenticateJWT(),
  validateRequest(editUserSchema),
  userController.updateUser
);
router.delete("/deleteuser", authenticateJWT(), userController.deleteUser);
module.exports = router;

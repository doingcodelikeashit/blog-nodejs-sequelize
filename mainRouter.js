const express = require("express");
const router = express.Router();
const userRoutes = require("./user/userRoutes");
router.use("/user", userRoutes);
// router.use("/admin", adminRoutes);
module.exports = router;

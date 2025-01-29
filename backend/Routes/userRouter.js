const express = require("express");
const { registerUser, authUser, allUsers } = require("../controllers/userControllers");
const { protect } = require("../Middlewares/auth");

const router = express.Router();

router.route("/registeruser").get(protect, allUsers);
router.route("/registeruser").post(registerUser); 
router.post("/login", authUser);

module.exports = router;

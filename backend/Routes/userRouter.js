const express = require("express");
const { registerUser, authUser, allUsers } = require("../controllers/userControllers");
const { protect } = require("../Middlewares/auth");

const router = express.Router();

router.get('/registeruser', protect ,allUsers);
router.post("/registeruser" , registerUser); 
router.post("/login", authUser);

module.exports = router;

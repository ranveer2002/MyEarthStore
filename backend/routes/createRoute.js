const express = require("express");
const router = express.Router();
const {login, signup} = require("../controllers/auth");
const {getUserData} = require("../controllers/getUserData");

router.post('/login', login);
router.post('/signup', signup);
router.get('/userdata', getUserData);
module.exports = router;
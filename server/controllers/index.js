const express = require("express");

const cities = require('./cities');

const router = express.Router();

router.get('/cities',cities.getData);
router.post('/add-city',cities.postData);

module.exports = router;

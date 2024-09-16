const express = require("express")
const router = express.Router();
const countryController = require("../controller/countryController");

router.get('/countries', countryController.searchCountries);
router.get('/countries/:code', countryController.countryDetails);

// router.get('/countries/all', countryController.allCountries); 

module.exports = router;
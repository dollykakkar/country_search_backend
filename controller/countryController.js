const countryModel = require("../models/countryModel");

async function searchCountries(req, res) {
    try {
        const name = req.query.name;
        if (!name) {
            return res.status(400).json({ error: 'Country name is required' });
            
        }
        const countries = await countryModel.countryByName(name);
        
        const filteredCountries = countries.filter(country => country.name.toLowerCase() === name.toLowerCase());
        console.log('Countries found:', filteredCountries); 
        res.json(filteredCountries);

    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: error.message });
    }
}

//country details..............
async function countryDetails(req, res) {
    try {
        const code = req.params.code;
        if (!code) {
            return res.status(400).json({ error: 'Country code is required' });
        }
        const country = await countryModel.countryByCode(code);
        if (!country) {
            return res.status(404).json({ error: 'Country not found' });
        }
        res.json(country);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// all country name .............
// async function allCountries(req, res) {
//     try {
//         const countryNames = await countryModel.allCountryNames();
//         console.log('Country Names:', countryNames);
//         res.json(countryNames);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

module.exports = { searchCountries, countryDetails };
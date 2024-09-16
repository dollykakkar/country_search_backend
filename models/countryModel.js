const axios = require("axios");
const API_URL = 'https://restcountries.com/v3.1';

function info(country) {
    return {
        name: country.name.common,
        official:country.name.official,
        capital: country.capital ? country.capital[0] : 'N/A',
        region: country.region,
        subregion: country.subregion,
        population: country.population,
        area: country.area,
        flags: country.flags.svg
    };
}

//search country details by the country name ..........
async function countryByName(name) {
    try {
        const response = await axios.get(`${API_URL}/name/${name}`);
        return response.data.map(info);
    } catch (error) {
        throw new Error('Error fetching countries by name');
    }
}

// search country details by the country code.........
async function countryByCode(code) {
    try {
        const response = await axios.get(`${API_URL}/alpha/${code}`);
        return info(response.data[0]);
    } catch (error) {
        throw new Error('Error fetching country by code');
    }
}

//get all country name ........
// async function allCountryNames() {
//     try {
//         const response = await axios.get(`${API_URL}/all`);
//         console.log('API Response:', response.data);
//         return response.data.map(country => country.name.common);
//     } catch (error) {
//         console.error('Error fetching all country names:', error.response ? error.response.data : error.message);
//         throw new Error('Error fetching all country names');
//     }
// }

module.exports = { countryByName, countryByCode };
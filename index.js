// const express = require('express');
// const axios = require('axios');
// const cors = require('cors');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // All country details 
// app.get('/api/allCountries', async (req, res) => {
//   try {
//     const response = await axios.get("https://restcountries.com/v3.1/all");
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: 'Error fetching countries' });
//   }
// });

// // Country details by name
// app.get('/api/countries', async (req, res) => {
//   const name = req.query.name || '';
//   if (!name) {
//     return res.status(400).json({ error: 'Country name query parameter is required' });
//   }
//   try {
//     // Use backticks for template literals
//     const response = await axios.get(`https://restcountries.com/v3.1/name/${name}`);
//     res.json(response.data);
//   } catch (error) {
//     res.status(500).json({ error: `No country found similar to: ${name}` });
//   }
// });

// // Country details by code
// app.get('/api/countries/:code', async (req, res) => {
//   const code = req.params.code;
//   try {
//     const response = await axios.get(`https://restcountries.com/v3.1/alpha/${code}`);
//     res.json(response.data[0]); 
//   } catch (error) {
//     res.status(500).json({ error: `No country code found similar to: ${code}` });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

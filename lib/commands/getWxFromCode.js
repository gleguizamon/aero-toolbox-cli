const axios = require('axios');
const inputFormatter = require('../utils/input-formatter');

/**
 * Gets metar from IATA/ICAO airport code
 *
 * @param {string} airport - The airport IATA/ICAO code.
 * @param {boolean} decode - Indicates if the metar has to be decoded.
 * @returns {string} The airport wx information.
 */
const getWxFromCode = async (airport, decode) => {
  const formattedCode = inputFormatter(airport);
  const endpoint = `https://beta.aviationweather.gov/cgi-bin/data/metar.php?ids=${formattedCode}${
    decode ? '&format=decoded' : ''
  }`;
  try {
    const response = await axios.get(endpoint);
    // console.log(response.status);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

module.exports = getWxFromCode;

const axios = require('axios');

const getLatLon = async(place) => {
    const encodedUrl = encodeURI(place);

    var instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': 'YrIv9XHJxmmshCBitpg1YTAnahQSp1KbdHhjsnSBU1hvMDMlzK' }
    });

    const response = await instance.get();

    if (response.data.Results.length === 0) {
        throw new Error(`No results for ${address}`);
    }

    const data = response.data.Results[0];
    const address = data.name;
    const lat = data.lat;
    const lon = data.lon

    return {
        address,
        lat,
        lon
    }
}

module.exports = { getLatLon };
const axios = require('axios');

const getWeather = async(lat, lon) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=55b0dac7bfac45ed4220ff186a71808f`);

    return response.data.main.temp;
}

module.exports = { getWeather }
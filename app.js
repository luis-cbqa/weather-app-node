const place = require('./place/place');
const weather = require('./weather/weather');
const argv = require('yargs').options({
    address: {
        alias: 'd',
        desc: 'City address to get the weather',
        demand: true
    }
}).argv;

const getInfo = async(address) => {
    try {
        const coord = await place.getLatLon(address);
        const temp = await weather.getWeather(coord.lat, coord.lon);
        return `The weather of ${coord.address} is ${temp} C`;
    } catch (err) {
        return `Cannot determine the weather of ${address}`;
    }
}

getInfo(argv.address).then(console.log).catch(console.log);
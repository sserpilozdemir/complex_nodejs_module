const https = require('https');

const getWeatherData = (city, callback) => {
    const apiKey = '********api_key*******';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    https.get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            try {
                const parsedData = JSON.parse(data);
                callback(null, parsedData);
            } catch (error) {
                callback(error, null);
            }
        });

    }).on('error', (error) => {
        callback(error, null);
    });
};

module.exports = {
    getWeatherData: getWeatherData
};

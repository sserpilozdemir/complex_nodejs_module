const express = require('express');
const weatherFramework = require('./weatherFramework');
const app = express();
const PORT = 3000;

app.get('/weather/:city', (req, res) => {
    const city = req.params.city;
    weatherFramework.getWeatherData(city, (error, data) => {
        if (error) {
            res.status(500).send("Error fetching weather.");
        } else {
            res.json(data);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Module server running on port ${PORT}`);
});

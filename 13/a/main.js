let publish = require("./mqtt");

var ds18b20 = require('ds18b20');
ds18b20.sensors(function (err, ids) {
    console.log(ids);
});



var bmp180 = new RaspiSensors.Sensor({
    type: "BMP180",
    address: 0X77
});



setInterval(() => {
    bmp180.fetch(function (err, data) {
        let pres = data.value;
        let temp = ds18b20.temperatureSync('28-020c9245b784');
        publish("temperature", temp);
        publish("pressure", pres);
    });
}, 1000 * 60 * 1);
var RaspiSensors = require('raspi-sensors');

//typ sensoru a adresa na I2C rozhraní
var sensor = new RaspiSensors.Sensor({
    type: "BMP180",
    address: 0X77
});

sensor.fetch(function (err, data) {
    if (err) {
        console.error("An error occured!");
        console.error(err.cause);
        return;
    }
    // vypíše hodnotu
    console.log(data);
});
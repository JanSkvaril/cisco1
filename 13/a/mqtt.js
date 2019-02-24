var mqtt = require('mqtt');

var fs = require('fs')
var KEY = fs.readFileSync('tls-key.pem');
var CERT = fs.readFileSync('tls-cert.pem');


var client = mqtt.connect("mqtt.nag-iot.zcu.cz", {

    port: 8883,
    protocol: "mqtt",
    rejectUnauthorized: false,
    username: "tym-11",
    password: "7pZjYdO0zV5rnUgn",

})

client.on('connect', function () {

    console.log("něco")
})
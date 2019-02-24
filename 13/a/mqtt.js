var mqtt = require('mqtt');

var fs = require('fs');


var client = mqtt.connect("mqtt.nag-iot.zcu.cz", {
	host:"mqtt.nag-iot.zcu.cz",
    port: 8883,
    protocol: "mqtts",

    username: "tym-11",
    password: "7pZjYdO0zV5rnUgn",
   

})

client.on('connect', function () {

    console.log("něco")
})
client.on("message",(topic,message)=>{
	console.log(message.toString());
});
client.on("error",(error)=>{
	console.log(error);
});
client.subscribe('tym/11/temperature')
console.log("zacalo");

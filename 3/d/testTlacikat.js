const Gpio = require('onoff').Gpio;

const button = new Gpio(11, 'in', 'both');
 
button.watch((err, value) => {
	console.log("testy");
});

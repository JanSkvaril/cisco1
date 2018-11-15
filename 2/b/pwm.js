const Gpio = require('pigpio').Gpio;
 
const led = new Gpio(4, {mode: Gpio.OUTPUT});
 

led.pwmWrite(0);
 
function main(iter){
	if (iter == 240){
		led.pwmWrite(0);
		return;
	}
	led.pwmWrite(iter);
	iter++;
	console.log(iter);
	setTimeout(()=>{main(iter)},20);
}

main(0);

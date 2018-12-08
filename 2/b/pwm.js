const Gpio = require('pigpio').Gpio; //načte knihovnu
 
const led = new Gpio(4, {mode: Gpio.OUTPUT}); //led je na pinu 4
 

led.pwmWrite(0); //vypne led
 
//rekurzivní funkce, která po časovém intervalu zvýší sílu svitu
//a vypne se na 240
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

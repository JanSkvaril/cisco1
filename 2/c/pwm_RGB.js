const Gpio = require('pigpio').Gpio; //načte knihovnu

//piny pro jednotlivé barvy
const ledR = new Gpio(11, {
    mode: Gpio.OUTPUT
});
const ledG = new Gpio(13, {
    mode: Gpio.OUTPUT
});
const ledB = new Gpio(15, {
    mode: Gpio.OUTPUT
});


led.pwmWrite(0); //vypne led

//rekurzivní funkce, která po časovém intervalu zvýší sílu svitu
//a vypne se na 240
function main(iter) {
    if (iter == 240) {
        ledR.pwmWrite(0);
        ledG.pwmWrite(0);
        ledB.pwmWrite(250);
        return;
    }
    ledR.pwmWrite(iter);
    ledG.pwmWrite(iter);
    ledB.pwmWrite(255 - iter);
    iter++;
    console.log(iter);
    setTimeout(() => {
        main(iter)
    }, 20);
}

main(0);
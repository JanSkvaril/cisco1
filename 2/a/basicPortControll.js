var Gpio = require('onoff').Gpio; //gpio knihovna
const portN = 4;
var Port = new Gpio(portN, 'out'); //načtení port

console.log("zapínání portu" + portN);
Port.writeSync(1); //zapne port;


//vypne Port za 5000ms

setTimeout(()=>{
Port.writeSync(0);
console.log("konec testu")
}, 5000);



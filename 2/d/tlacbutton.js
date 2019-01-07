var Gpio = require('onoff').Gpio;
var pushButton = new Gpio(12, 'in', 'both'); //nastavý pin na to, že je tlačítku
//při stlačení tlačítka se zavolá anonymní funkce a do console se vypíše hodnota
pushButton.watch(function (err, value) {

    console.log("tlačítko: " + value)
});
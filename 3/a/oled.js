var oled = require('rpi-oled');

//parametry displaye
var opts = {
  width: 128,
  height: 64,
  adress:0x3C
};

var oled = new oled(opts);

//vyčištění displaye
oled.clearDisplay();
oled.fillRect(1, 1, 128, 64, 0);

//font pro výpis textu
var font = require('oled-font-5x7');

// začne psát na řádku 1 1 
oled.setCursor(1, 1);
oled.writeString(font, 1, 'Cats are cooool :)', 1, true);


console.log("oled will turn of after 10 secons...");
setTimeout(()=>{oled.turnOffDisplay();},10000);

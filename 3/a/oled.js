var oled = require('rpi-oled');

var opts = {
  width: 128,
  height: 64,
};

var oled = new oled(opts);

oled.clearDisplay();
oled.fillRect(1, 1, 128, 64, 0);

var font = require('oled-font-5x7');

// sets cursor to x = 1, y = 1
oled.setCursor(1, 1);
oled.writeString(font, 1, 'Cats are cooool :)', 1, true);
console.log("oled will turn of after 10 secons...");
setTimeout(()=>{oled.turnOffDisplay();},10000);

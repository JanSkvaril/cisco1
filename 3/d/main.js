var oled = require('rpi-oled');
const rotaryEncoder = require('onoff-rotary');
var font = require('oled-font-5x7');

var ds18b20 = require('ds18b20');
ds18b20.sensors(function(err, ids) {
  console.log(ids);
});

const myEncoder = rotaryEncoder(10, 9); // Using BCM 5 & BCM 6 on the PI
var opts = {
  width: 128,
  height: 64,
};

var oled = new oled(opts);
clearDisp();

function clearDisp(){
	oled.clearDisplay();
oled.fillRect(1, 1, 128, 64, 0);
}

function displayTxt(text){
	clearDisp();
	console.log("displaying: " + text);
 oled.setCursor(1, 1);
oled.writeString(font, 1, text, 1, true);

}
  
   
 console.log("zatoc s tim");
 myEncoder.on('rotation', direction => {
        if (direction > 0) {
            displayTxt("pocet noh u kocky: 4");
        } else {
            displayTxt("teplota tamhle: 20°C");
        }
  });
  
setTimeout(()=>{oled.turnOffDisplay();},10000);
    
    

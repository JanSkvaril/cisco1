var oled = require('rpi-oled');
const rotaryEncoder = require('onoff-rotary');
var font = require('oled-font-5x7');
var ds18b20 = require('ds18b20');
var request = require('request');
//pro bmp
var RaspiSensors = require('raspi-sensors');



var bmp180 = new RaspiSensors.Sensor({
    type    : "BMP180",
    address : 0X77
}); 

//nastavení enkoderu
const myEncoder = rotaryEncoder(10, 9); 

//parametry displaye
var opts = {
  width: 128,
  height: 64,
};

//vytvoření a vyčištěný displaye
var oled = new oled(opts);
clearDisp();
function clearDisp(){
	oled.clearDisplay();
oled.fillRect(1, 1, 128, 64, 0);
}

//funkce pro výpis textu na display
function displayTxt(text){
	clearDisp();
	console.log("displaying: " + text);
 oled.setCursor(1, 1);
oled.writeString(font, 1, text, 1, true);

}

//stav určuje co se má zobrazovat
let state = 0;

//událost která zavolá anononymní funkci při rotaci encoderu.
//parametr direction určuje směr rotace
 myEncoder.on('rotation', direction => {
        state++;
        DisplayState();
        //displayTxt(state.toString());
  });

//zobrazí stav na oled
function DisplayState(){
	
if (state >= 4) state = 0;
if (state < 0) state = 3;
  //čas datum
  if (state == 0){
    displayTxt(date.toString());
  }
  //teptola 
  else if (state == 1){
    displayTxt("Tepolota: "+ tempeture +" °C");
  }
  //spojení se soutěžním serverem 
  else if (state == 2){
    if (connection) displayTxt("Spojení navázáno");
    else displayTxt("Spojení se serverem nenavázáno :(");
  }
  else if (state == 3){
    displayTxt("Tlak: " + pressure);
  }
}

let date = new Date();
//periodicky obnovované hodnoty
let tempeture = "0";
let connection = false;
let pressure = "0";

//obnovení hodnot každou 1/4 minutu
setTimeout(()=>{
  UpdateStates();
},1000 * 60 * 0.25);

function UpdateStates(){
	testConnection();
  setTempeture();
  DisplayState();
}

//nastaví proměnou connection na true pokud se podaří navázat spojení se serverem;
function testConnection(){
  const APIkey = "7pZjYdO0zV5rnUgn";
  let APIurl = "https://api.nag-iot.zcu.cz/v2/variable/temperature?api_key=" + APIkey;
  console.log("requesting on " + APIurl);
  request(APIurl, function (error, response, body) {
    if (error == null) connection = true;
    else connection = false;
  });
}

//nastaví hodnotu z cidla
function setTempeture(){
  tempeture = ds18b20.temperatureSync('28-020c9245b784');
}

//nastav hodnotu z cidla
function setPressure(){
  bmp180.fetch(function(err, data) {
    if(err) {
        console.error("An error occured!");
        console.error(err.cause);
        return;
    } 
    if (data.type == "Pressure"){
    pressure = data.value;
    }
});
}

//za 2 minuty se vypne display
setTimeout(()=>{
  oled.turnOffDisplay();
  console.log("display vypnut");
},1000 * 60 * 2);

UpdateStates();
DisplayState();
    
    

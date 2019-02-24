var request = require('request');

//api klíč
const APIkey = "7pZjYdO0zV5rnUgn";

function GetAllVariables(callback){
  let APIurl = "https://api.nag-iot.zcu.cz/v2/variables?api_key=" + APIkey;
  console.log("requesting on " + APIurl);
  request(APIurl, function (error, response, body) {
    callback(body);
  });
}

function GetValueOfVariable(variable,callback){
  let APIurl = "https://api.nag-iot.zcu.cz/v2/variable/"+variable+"?api_key=" + APIkey;
  console.log("requesting on " + APIurl);
  request(APIurl, function (error, response, body) {
    callback(body);
  });
}

function SendValueToVariable(variable,value,callback){
  let APIurl = "https://api.nag-iot.zcu.cz/v2/value/"+variable+"?api_key=" + APIkey;
  request({
    "url":APIurl,
    "method":"POST",
    "json":{"value":value}
  },(error, response, body)=>{
    callback(body);
  });
}


var ds18b20 = require('ds18b20');
ds18b20.sensors(function(err, ids) {
  console.log(ids);
});

//pošle teptotu na server
function SendTempeture(){
let temp = ds18b20.temperatureSync('28-020c9245b784');
SendValueToVariable("temperature", temp,(resp)=>{
	GetValueOfVariable("temperature",(resp)=>{
		let o = JSON.parse(resp);
		console.log("odeslána momentální teplota: " + o.value);
	});
});
}


var RaspiSensors = require('raspi-sensors');
var bmp180 = new RaspiSensors.Sensor({
    type    : "BMP180",
    address : 0X77
}); 

//pošle tlak na server
function SendPressure(){
  bmp180.fetch(function(err, data) {
    let pres = data.value;
    SendValueToVariable("pressure", pres,(resp)=>{
      GetValueOfVariable("pressure",(resp)=>{
        let o = JSON.parse(resp);
        console.log("odeslán momentální tlak: " + o.value);
      });
    });
});
}


//periodicky posílá hodnoty na server
 setInterval(()=>{
 SendTempeture();
  SendPressure();
 }, 1000 * 60 * 1);

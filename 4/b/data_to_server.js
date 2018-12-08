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
//console.log('Current temperature is' + ds18b20.temperatureSync('28-020c9245b784'));


function SendTempeture(){
let temp = ds18b20.temperatureSync('28-020c9245b784');
SendValueToVariable("temperature", temp,(resp)=>{
	GetValueOfVariable("temperature",(resp)=>{
		let o = JSON.parse(resp);
		console.log("odeslána momentální teplota: " + o.value);
	});
});
}

// SendTempeture();


// setInterval(()=>{
// SendTempeture();
// GetValueOfVariable("temperature",(resp)=>{console.log(resp)});
// }, 1000 * 60 * 1)

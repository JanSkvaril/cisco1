var request = require('request');

//api klíč
const APIkey = "7pZjYdO0zV5rnUgn";

//zavolá callback po obdržení všech proměných na serveru
function GetAllVariables(callback){
  let APIurl = "https://api.nag-iot.zcu.cz/v2/variables?api_key=" + APIkey;
  console.log("requesting on " + APIurl);
  request(APIurl, function (error, response, body) {
    callback(body);
  });
}

//variable - název proměné na serveru
//zavolá callback po obdržení konkrétní proměné ze serveru
function GetValueOfVariable(variable,callback){
  let APIurl = "https://api.nag-iot.zcu.cz/v2/variable/"+variable+"?api_key=" + APIkey;
  console.log("requesting on " + APIurl);
  request(APIurl, function (error, response, body) {
    callback(body);
  });
}

//variable - název proměné na serveru
//value - hodnota na odeslání
//zavolá callback po odeslání proměné na server
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



//GetAllVariables((response)=>{console.log(response)});
//GetValueOfVariable("testing",(res)=>{ console.log(res);});
/* SendValueToVariable("testing",5,(response)=>{
  GetValueOfVariable("testing",(res)=>{ console.log(res)});
}); */
var ds18b20 = require('ds18b20');

//vypíše adresu všech sensorů na rozhraní 1-Wire
ds18b20.sensors(function(err, ids) {
  console.log(ids);
});

//28-020c9245b784 - odresa našeho sensoru
console.log('Current temperature is' + ds18b20.temperatureSync('28-020c9245b784'));

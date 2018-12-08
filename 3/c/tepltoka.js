var ds18b20 = require('ds18b20');
ds18b20.sensors(function(err, ids) {
  console.log(ids);
});
console.log('Current temperature is' + ds18b20.temperatureSync('28-020c9245b784'));

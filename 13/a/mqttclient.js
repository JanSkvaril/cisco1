'use strict'

/** ************************** IMPORTANT NOTE ***********************************

  The certificate used on this example has been generated for a host named stark.
  So as host we SHOULD use stark if we want the server to be authorized.
  For testing this we should add on the computer running this example a line on
  the hosts file:
  /etc/hosts [UNIX]
  OR
  \System32\drivers\etc\hosts [Windows]

  The line to add on the file should be as follows:
  <the ip address of the server> stark
 *******************************************************************************/

var mqtt = require('mqtt')
var fs = require('fs')
var path = require('path')
var KEY = fs.readFileSync('tls-key.pem')
var CERT = fs.readFileSync('tls-cert.pem')
var TRUSTED_CA_LIST = fs.readFileSync('crt.ca.cg.pem')

var PORT = 8883
var HOST = 'mqtt.nag-iot.zcu.cz'

var options = {
  port: PORT,
  host: HOST,
  key: KEY,
  cert: CERT,
  rejectUnauthorized: true,
  // The CA list will be used to determine if server is authorized
  ca: TRUSTED_CA_LIST,
  protocol: 'mqtts',
  username: "tym-11",
  password: "7pZjYdO0zV5rnUgn",
}

var client = mqtt.connect(options)

client.on('connect', function () {
  console.log('Connected')
})
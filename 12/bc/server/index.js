var express = require('express')
var bodyParser = require('body-parser')
var app = express()
app.use(bodyParser.text({
    type: 'text/plain'
}))
app.post('/', function (req, res) {
    console.log(req.body);
    res.send('Hello World');
})

app.listen(3000);
console.log("listening on 3000");
var express = require('express')
var app = express()
var bodyParser = require('body-parser')


var urlencodedParser = bodyParser.urlencoded({extended: false})
app.set('view engine', 'ejs')
app.get('/', function (req, res) {
    res.render('index')
})
app.get('/menus', function (req, res) {
    res.render('menus')
})
app.get('/contacts', function (req, res) {
    res.render('contacts')
})
app.post('/contacts', function (req, res) {
    console.log("funciona")
    res.send('respuesta')
})


app.listen(8080);
    
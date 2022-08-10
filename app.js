const express = require('express')
const hbs = require('hbs')

const app = express()
const port = 8080

//Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

//Servir contenido estático a través de middleware
app.use(express.static('public'))

app.get('/', function (req, res) {
  res.render('home', {
  	nombre: 'Mariangel',
  	titulo: 'Webserver con Node'
  })
})

app.get('/generic', function (req, res) {
  res.render('generic', {
  	nombre: 'Mariangel',
  	titulo: 'Webserver con Node'
  })
})

app.get('/elements', function (req, res) {
  res.render('elements', {
  	nombre: 'Mariangel',
  	titulo: 'Webserver con Node'
  })
})

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
	console.log(`Escuchando puerto: ${port}`)
});
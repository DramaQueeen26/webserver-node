const express = require('express')
const app = express()
const port = 8080

//Servir contenido estático a través de middleware
app.use(express.static('public'))

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
	console.log(`Escuchando puerto: ${port}`)
});
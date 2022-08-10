require('dotenv').config()
const express = require('express')

const app = express()
const port = process.env.PORT

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(port, () => {
	console.log(`Escuchando puerto: ${port}`)
});
const express = require('express')
const app = express()

// servir contenido estático
app.use( express.static('./public/templated-roadtrip') )

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/templated-roadtrip/generic.html')
})

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/templated-roadtrip/elements.html')
})

app.get('/personas', (req, res) => {
  res.send('Hello World')
})

app.get('*', (req, res) => {
  res.send('Error 404 | Page not found')
})


app.listen(8080)
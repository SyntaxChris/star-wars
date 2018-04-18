const express = require('express')
const https = require('http')
const path = require('path')
const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.set('port', process.env.PORT || 8080)

const server = app.listen(app.get('port'), function() {
  console.log('listening on port ', server.address().port)
})

function keepAwake () {
  console.log('------ keep awake ------');
  return https.get(process.env.APP_URL);
}

setInterval(function() { keepAwake() }, 300000) // every 5 minutes (300000)
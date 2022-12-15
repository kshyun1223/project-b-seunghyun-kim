import express from 'express'
import xmlparser from 'express-xml-bodyparser';

const app = express()
app.use(xmlparser());

fetch('https://openapi.its.go.kr:9443/trafficInfo?apiKey=test&type=all&minX=126.800000&maxX=127.890000&minY=34.900000&maxY=35.100000&getType=json')
.then(response => {
  console.log('Response status: ' + response.status)
  return response.text()
})
.then(responseText => console.log('Response text: ' + responseText))
.catch(error => console.log('Error caught: ' + error))

import { xml2json } from 'xml-js'

fetch('https://openapi.its.go.kr:9443/trafficInfo?apiKey=test&type=all&minX=126.800000&maxX=127.890000&minY=34.900000&maxY=35.100000&getType=json')
.then(res => {
  console.log('Response status: ' + res.status)
  const resText = res.text()
  return resText
})
.then(resText => result(resText))
.catch(error => console.log('Error caught: ' + error))

const result = (xml: string) => {
  var result1 = xml2json(xml, {compact: true, spaces: 4});
  var result2 = xml2json(xml, {compact: false, spaces: 4});
  console.log(result1, '\n', result2)
}

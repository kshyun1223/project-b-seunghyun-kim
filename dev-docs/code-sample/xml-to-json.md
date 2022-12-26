```javascript
const xml2json = require('xml-js');

fetch('https://openapi.its.go.kr:9443/trafficInfo?apiKey=test&type=X=126.800000&Y=34.900000&getType=json')
.then((res) => {
  console.log('Response status: ' + res.status)
  const resText = res.text()
  return resText
})
.then((resText) => result(resText))
.catch((error) => console.log('Error caught: ' + error))

const result = (xml) => {
  let parse = xml2json.xml2json(xml, {compact: false, spaces: 4});
  console.log(parse)
}
```


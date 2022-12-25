```javascript
import * as fs from 'fs'

const rawData = fs.readFileSync('./data.json')
const parsed = JSON.parse(rawData)
const linkMarker = parsed.map(index => {
  return `traffic('${index.LK_NM}', ${index.MinX}, ${index.MaxY})`
});
// console.log(linkMarker)

// fs.writeFileSync("marker.txt", string)
const string = JSON.stringify(linkMarker)

console.log(
  string.replace(/","/g, '\n').replace(/\["/g, '').replace(/"\]/g, '')
)
```




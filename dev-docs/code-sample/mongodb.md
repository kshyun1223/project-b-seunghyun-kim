### 연결
```javascript
import { MongoClient } from "mongodb";
const uri = ""
const client = new MongoClient(uri);
const run = async () => {
  try {
    const db = client.db('traffic');
    const traffic = await db.collection('traffic').find({}).toArray();
    return output(traffic)
  } finally {
    await client.close();
  }
}
run().catch(console.dir());

const output = (traffic) => console.log(traffic)
```

### 수정
```javascript
await db.collection('traffic').updateMany({},{$rename:{"BEGIN_NODE_XCODE":"MinX"}})
await db.collection('traffic').updateMany({},{$rename:{"BEGIN_NODE_YCODE":"MinY"}})
await db.collection('traffic').updateMany({},{$rename:{"END_NODE_XCODE":"MaxX"}})
await db.collection('traffic').updateMany({},{$rename:{"END_NODE_YCODE":"MaxY"}})
```
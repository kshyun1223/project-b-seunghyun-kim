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
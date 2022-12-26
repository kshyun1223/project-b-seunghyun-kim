import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongoClient } from 'mongodb'
import * as fs from 'fs'

@Injectable()
export class DbService {
  constructor(private configService: ConfigService){} // 전역으로 설정된 config 모듈은 이렇게 가져온다

  getData() {
    const uri = this.configService.get('MONGO_URL')
    const client = new MongoClient(uri);
    const run = async () => {
      try {
        const db = client.db('traffic');
        const data = await db.collection('traffic').find({}).toArray();
        const logJson = JSON.stringify(data, null, 2);
        fs.writeFileSync("./src/db/temp/data.json", logJson);
      } finally {
        await client.close();
      }
    }
    run().catch(console.dir);
  }

  processData(){
    const loadData = fs.readFileSync('./src/db/temp/data.json', 'utf8')
    const parsed = JSON.parse(loadData)
    const mapped = parsed.map(index => {
      return `traffic('${index.LK_NM}', ${index.MinX}, ${index.MinY}, ${index.MaxX}, ${index.MaxY})`
    });
    const string = JSON.stringify(mapped)
    const replace = string.replace(/","/g, '\n').replace(/\["/g, '').replace(/"\]/g, '')
    fs.writeFileSync('./src/db/temp/marker.txt', `<script>${replace}</script>`, 'utf8')
  }
}


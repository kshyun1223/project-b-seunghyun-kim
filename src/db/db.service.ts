import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongoClient } from "mongodb"
import * as fs from 'fs'

@Injectable()
export class DbService {
  constructor(private configService: ConfigService){}

  getData() {
    const uri = this.configService.get('MONGO_URL')
    const client = new MongoClient(uri);
    const run = async () => {
      try {
        const db = client.db('traffic');
        const traffic = await db.collection('traffic').find({}).toArray();
        const logJson = JSON.stringify(traffic, null, 2);
        fs.writeFileSync("./src/db/data.json", logJson);
      } finally {
        await client.close();
      }
    }
    run().catch(console.dir);
  }
}


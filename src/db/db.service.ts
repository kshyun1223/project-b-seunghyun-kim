import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { MongoClient } from "mongodb"

@Injectable()
export class DbService {
  constructor(private configService: ConfigService){}
  private uri = this.configService.get('MONGO_URL')
  private client = new MongoClient(this.uri);
  private run = async () => {
      try {
        const db = this.client.db('traffic');
        const traffic = await db.collection('traffic').find({}).toArray();
        return traffic
      } finally {
        await this.client.close();
      }
    }

    getData() {
    return console.log(this.run)
  }
}

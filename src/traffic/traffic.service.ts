import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import { TrafficController } from './traffic.controller';
const xml2json = require('xml-js')

@Injectable()
export class TrafficService {
  constructor(private configService: ConfigService){}
  private key = this.configService.get('TRAFFIC_KEY')
  
  async getTraffic(minX, minY, maxX, maxY){
    const url = `https://openapi.its.go.kr:9443/trafficInfo?apiKey=${this.key}&type=all&minX=${minX}&minY=${minY}&maxX=${maxX}&maxY=${maxY}`
    console.log(url)
    try {
      const response = await fetch(url)
      const rawData = await response.text()
      const json = await xml2json.xml2json(rawData, {compact: true, spaces: 2})
      const parsedData = await JSON.parse(json)
      const speed = await parsedData.response.body.items.item[0].speed._text+'km/h'
      console.log(speed)
      return speed
    } catch(error){
      console.log("에러 메시지: " + error)
      return "error"
    }
  }
}
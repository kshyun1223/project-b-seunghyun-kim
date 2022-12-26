import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
import * as fs from 'fs'
const xml2json = require('xml-js')

@Injectable()
export class TrafficService {
  constructor(private configService: ConfigService){}
  private key = this.configService.get('TRAFFIC_KEY')
  getTraffic(minX, minY, maxX, maxY) {
    fetch(`https://openapi.its.go.kr:9443/trafficInfo?apiKey=${this.key}&type=all&minX=${minX}&minY=${minY}&maxX=${maxX}&maxY=${maxY}`)
      .then((res) => {
        // console.log('Response status: ' + res.status)
        const rawData = res.text()
        return rawData
      })
      .then((rawData) => {
        const parsedData = xml2json.xml2json(rawData, {compact: true, spaces: 2})
        fs.writeFileSync('./test.json', parsedData)
      })
  }
}



// error(4009)
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
        const rawData = res.text()
        return rawData
      })
      .then((rawData) => {
        const json = xml2json.xml2json(rawData, {compact: true, spaces: 2})
        return json
      })
      .then((json) => {
        const parsedData = JSON.parse(json)
        return parsedData
      })
      .then((parsedData) => {
        const speed = parsedData.response.body.items.item[0].speed._text+'km/h'
        console.log(speed)
      })
      .catch((error) => {
        console.error('undefined');
      });
  }
}
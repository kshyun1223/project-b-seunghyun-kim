import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config'
const xml2json = require('xml-js')
import * as fs from 'fs'

@Injectable()
export class TrafficService {
  constructor(private configService: ConfigService){} // 전역으로 설정된 config 모듈은 이렇게 가져온다
  private key = this.configService.get('TRAFFIC_KEY')
  getTraffic(minX, minY, maxX, maxY) {
    const url = `https://openapi.its.go.kr:9443/trafficInfo?apiKey=${this.key}&type=all&minX=${minX}&minY=${minY}&maxX=${maxX}&maxY=${maxY}`
    console.log(url)
    fetch(url)
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
        fs.writeFileSync('./src/traffic/temp/speed.txt', speed, 'utf8')
      })
      .catch((error) => {
        fs.writeFileSync('./src/traffic/temp/speed.txt', 'error', 'utf8')
      });
  }
}
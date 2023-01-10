import { Get, Controller, Req, Res } from '@nestjs/common';
import { TrafficService } from './traffic.service';
import { Request, Response } from 'express'
import * as fs from 'fs'
import { rejects } from 'assert';
const xml2json = require('xml-js')
import { ConfigService } from '@nestjs/config';


@Controller('traffic')
export class TrafficController {
  constructor(
    private trafficService : TrafficService,
    private configService: ConfigService
  ){}
  private key = this.configService.get('TRAFFIC_KEY')
  @Get()
  root(@Res() res: Response, @Req() req: Request) {
    const getTraffic = (minX, minY, maxX, maxY) => {
      const url = `https://openapi.its.go.kr:9443/trafficInfo?apiKey=${this.key}&type=all&minX=${minX}&minY=${minY}&maxX=${maxX}&maxY=${maxY}`
      
      console.log(url)
      fetch(url)
        .then((res => {
          const rawData = res.text()
          return rawData
        }))
        .then((rawData => {
          const json = xml2json.xml2json(rawData, {compact: true, spaces: 2})
          return json
        }))
        .then((json => {
          const parsedData = JSON.parse(json)
          return parsedData
        }))
        .then((parsedData => {
          const speed = parsedData.response.body.items.item[0].speed._text+'km/h'
          console.log(speed)
          // fs.writeFileSync('./src/traffic/temp/speed.txt', speed, 'utf8')
          send(speed)
        }))
        .catch((error => {
          // fs.writeFileSync('./src/traffic/temp/speed.txt', 'error', 'utf8')
          console.log("에러 메시지: " + error)
          send("error")
        }));
    }

    getTraffic(req.query.minX, req.query.minY, req.query.maxX, req.query.maxY)

    // const temp = fs.readFileSync('./src/traffic/temp/speed.txt','utf-8')

    const send = (speed) => {
      res.send(JSON.stringify(speed))
    }
  }
}

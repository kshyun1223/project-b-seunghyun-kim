import { Get, Controller, Req, Res } from '@nestjs/common';
import { TrafficService } from './traffic.service';
import { Request, Response } from 'express'
import * as fs from 'fs'

@Controller('traffic')
export class TrafficController {
  constructor(private trafficService : TrafficService){}
  @Get()
  root(@Res() res: Response, @Req() req: Request) {
    this.trafficService.getTraffic(req.query.minX, req.query.minY, req.query.maxX, req.query.maxY)
    const temp = fs.readFileSync('./src/traffic/speed.txt','utf-8')
    res.send(JSON.stringify(temp))
  }
}

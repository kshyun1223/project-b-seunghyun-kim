import { Get, Controller, Req, Res } from '@nestjs/common';
import { TrafficService } from './traffic.service';
import { Request, Response } from 'express'

@Controller('traffic')
export class TrafficController {
  constructor(private trafficService : TrafficService){}
  @Get()
  root(@Res() res: Response, @Req() req: Request) {
    console.log(req.query.minX, req.query.minY, req.query.maxX, req.query.maxY)
    this.trafficService.getTraffic(req.query.minX, req.query.minY, req.query.maxX, req.query.maxY)
    res.send(JSON.stringify("더미텍스트"))
  }
}

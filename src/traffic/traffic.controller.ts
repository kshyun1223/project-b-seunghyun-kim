import { Get, Controller, Req, Res } from '@nestjs/common';
import { TrafficService } from './traffic.service';
import { Request, Response } from 'express'

@Controller('traffic')
export class TrafficController {
  constructor(private trafficService : TrafficService){}

  @Get()
  root(@Res() res: Response, @Req() req: Request) {
    console.log(req.query)
    res.send(JSON.stringify("여기서도 잘되나~"))
  }
}

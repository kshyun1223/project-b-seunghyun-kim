import { Get, Controller, Res } from '@nestjs/common';
import { MapService } from './map.service';
import { Response } from 'express'

@Controller('/')
export class MapController {
  constructor(private mapService : MapService){}
  @Get()
  root(@Res() res: Response) {
    res.send(this.mapService.getData())
  }
}
import { Get, Controller, Render, Res } from '@nestjs/common';
import { response } from 'express';
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
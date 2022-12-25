import { Get, Controller, Res } from '@nestjs/common';
import { MapService } from './map.service';
import { Response } from 'express'
import { DbService } from 'src/db/db.service';
import * as fs from 'fs'


@Controller('/')
export class MapController {
  constructor(private mapService : MapService,
    dbService : DbService){}
  @Get()
  root(@Res() res: Response) {
    const map = this.mapService.getPage()
    const marker = fs.readFileSync('src/db/marker.txt')
    res.send(map+marker)
  }
}
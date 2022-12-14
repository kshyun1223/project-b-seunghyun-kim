import { Get, Controller, Render } from '@nestjs/common';
import { MapService } from './map.service';

@Controller('/')
export class MapController {
  constructor(private mapService : MapService){}
  @Get()
  @Render('index')
  root() {
    return this.mapService.getLogic()
  }
}

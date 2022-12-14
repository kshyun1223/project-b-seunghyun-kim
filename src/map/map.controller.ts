import { Controller, Get, Render } from '@nestjs/common';
// import { MapService } from './map.service';

@Controller('map')
export class MapController {
  // constructor(private mapService : MapService){}
  @Get()
  @Render('index')
  root() {
    return { message: '젭알좀되라!!!' };
  }
}

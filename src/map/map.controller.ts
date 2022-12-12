import { Controller, Get } from '@nestjs/common';
import { MapService } from './map.service';

/* @Controller('map')
export class MapController {
  mapService : MapService

  constructor(mapService : MapService) {
    this.mapService = mapService
  }
} */

@Controller('map')
export class MapController {
  constructor(private mapService: MapService){}

  @Get()
  getMap(){
    return this.mapService.getMap()
  }
}
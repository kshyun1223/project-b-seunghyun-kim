import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { DbService } from 'src/db/db.service';
import { MapController } from './map.controller';
import { MapService } from './map.service';
import { MapScript } from './map.service.script';

@Module({
  imports:[DbModule],
  controllers: [MapController],
  providers: [MapService, MapScript, DbService]
})
export class MapModule {}

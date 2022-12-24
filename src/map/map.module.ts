import { Module } from '@nestjs/common';
import { DbModule } from 'src/db/db.module';
import { MapController } from './map.controller';
import { MapService } from './map.service';

@Module({
  imports:[DbModule],
  controllers: [MapController],
  providers: [MapService]
})
export class MapModule {}

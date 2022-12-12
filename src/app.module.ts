import { Module } from '@nestjs/common';
import { MapService } from './map/map.service';
import { MapModule } from './map/map.module';

@Module({
  imports: [MapModule],
  providers: [MapService],
})
export class AppModule {}

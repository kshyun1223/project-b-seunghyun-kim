import { Module } from '@nestjs/common'
import { MapModule } from './map/map.module'
import { TrafficModule } from './traffic/traffic.module';

@Module({
  imports: [MapModule, TrafficModule],
})
export class AppModule {}

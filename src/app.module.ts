import { Module } from '@nestjs/common'
import { MapService } from './map/map.service'
import { MapModule } from './map/map.module'
import { ConfigModule } from '@nestjs/config'
import { TrafficModule } from './traffic/traffic.module';

@Module({
  imports: [
    MapModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    TrafficModule
  ],
  providers: [MapService],
})
export class AppModule {}

import { Module } from '@nestjs/common'
import { MapService } from './map/map.service'
import { MapModule } from './map/map.module'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    MapModule,
    ConfigModule.forRoot({
      isGlobal: true
    })
  ],
  providers: [MapService],
})
export class AppModule {}

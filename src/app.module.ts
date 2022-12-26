import { Module } from '@nestjs/common'
import { MapService } from './map/map.service'
import { MapModule } from './map/map.module'
import { ConfigModule } from '@nestjs/config'
import { TrafficModule } from './traffic/traffic.module';

@Module({
  imports: [
    MapModule,
    ConfigModule.forRoot({
      isGlobal: true // 개별 모듈별로 일일이 config 모듈을 import 하지 않아도 사용할 수 있도록 전역으로 설정
    }),
    TrafficModule
  ],
  providers: [MapService],
})
export class AppModule {}

import { Module } from '@nestjs/common'
import { MapModule } from './map/map.module'
import { ConfigModule } from '@nestjs/config'
import { TrafficModule } from './traffic/traffic.module';

@Module({
  imports: [
    MapModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'dev' ? '.env.dev' : '.env.prod',
      ignoreEnvFile: process.env.NODE_ENV === 'prod',
      }),
    TrafficModule
  ],
})
export class AppModule {}

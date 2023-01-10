import { Module } from '@nestjs/common'
import { MapModule } from './map/map.module'
import { TrafficModule } from './traffic/traffic.module'
import { ConfigModule } from '@nestjs/config'

const envChange = () => {
  switch(process.env.NODE_ENV){
    case 'dev':
      return '.env_dev'

    case 'prod':
      return '.env_prod'

    case 'stage':
      return '.env_stage'
  }
}

@Module({
  imports: [
    MapModule, 
    TrafficModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: envChange(),
    })
  ],
})

export class AppModule {}

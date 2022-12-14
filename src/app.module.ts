import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MapModule } from './map/map.module';

@Module({
  controllers: [AppController],
  imports: [MapModule],
})
export class AppModule {}
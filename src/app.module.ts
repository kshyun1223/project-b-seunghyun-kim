import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MapModule } from './map/map.module';
import { MapService } from './map/map.service';

@Module({
  imports: [MapModule],
  providers: [MapService]
  // controllers: [AppController],
})
export class AppModule {}
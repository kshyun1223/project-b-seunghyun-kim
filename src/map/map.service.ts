import { Injectable } from '@nestjs/common';

@Injectable()
export class MapService {
  private map = ''
  getMap(): string {
    return this.map
  }
}

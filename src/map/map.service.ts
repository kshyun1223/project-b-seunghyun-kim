import { Injectable } from '@nestjs/common';

@Injectable()
export class MapService {
    private index = { index: 'welcome' }

    getLogic() {
      return this.index;
  }
}
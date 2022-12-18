import { Injectable } from '@nestjs/common';

@Injectable()
export class MapService {
    private body = { body: 'body' }

    getLogic() {
      return this.body;
  }
}
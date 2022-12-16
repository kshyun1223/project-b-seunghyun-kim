import { Injectable } from '@nestjs/common';

@Injectable()
export class MapService {
  private test = { message: 'ㅁㄴㅇㄹ' }

  getLogic() {
      return this.test;
  }
}
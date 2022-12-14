import { Injectable } from '@nestjs/common';

@Injectable()
export class MapService {
  private test = { message: '젭알좀되라!!!' }

  getLogic() {
      return this.test;
  }
}
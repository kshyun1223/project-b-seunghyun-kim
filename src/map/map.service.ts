import { Injectable } from '@nestjs/common';

@Injectable()
export class MapService {
    private data = "<script>alert('test')</script>"

    getData() {
      return this.data;
  }
}
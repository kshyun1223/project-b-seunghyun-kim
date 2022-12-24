import { Injectable } from '@nestjs/common';
import * as fs from 'fs'

@Injectable()
export class MapService {
  private html = (tag) => {
    return fs.readFileSync('D:/vscode repo/project-b-seunghyun-kim/static/'+tag+'.txt', 'utf8')
  }

  getData() {
    return this.html('index')
  }
}
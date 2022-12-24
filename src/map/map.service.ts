import { Injectable } from '@nestjs/common';
import * as fs from 'fs'

@Injectable()
export class MapService {
  private html = (tag) => {
    return fs.readFileSync('D:/vscode repo/project-b-seunghyun-kim/static/'+tag+'.txt', 'utf8')
  }
  private data = `
    ${this.html('index')}
  `

  getData() {
    return this.data
  }
}
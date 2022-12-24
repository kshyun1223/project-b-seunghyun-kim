import { Injectable } from '@nestjs/common';
import * as fs from 'fs'

@Injectable()
export class MapService {
  private html = (tag) => {
    return fs.readFileSync('D:/vscode repo/project-b-seunghyun-kim/static/'+tag+'.txt', 'utf8')
  }
  
  private data = `
    ${this.html('head')}
    ${this.html('body')}
    ${this.html('script')}
  `

  getData() {
    return this.data
  }
}
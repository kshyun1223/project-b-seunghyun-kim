import { Injectable } from '@nestjs/common';
import * as fs from 'fs'

@Injectable()
export class MapService {
  private html = (tag: string) => {
    return fs.readFileSync('./static/'+tag+'.txt', 'utf8')
  }
  
  private data = `
    ${this.html('head')}
    ${this.html('body')}
    ${this.html('script')}
  `

  getPage() {
    return this.data
  }
}
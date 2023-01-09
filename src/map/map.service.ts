import { Injectable } from '@nestjs/common';
import * as fs from 'fs'
import { MapScript } from './map.service.script'

@Injectable()
export class MapService {
  constructor(private mapscript : MapScript){}
  private html = (tag: string) => {
    return fs.readFileSync('./static/'+tag+'.txt', 'utf8')
  }
  
  private data = `
    ${this.html('head')}
    ${this.html('body')}
    ${this.mapscript.getScript()}
  `

  getPage() {
    return this.data
  }
}
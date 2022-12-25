import { Get, Controller, Res } from '@nestjs/common';
import { DbService } from './db.service';
import { Response } from 'express'
import * as fs from 'fs'

@Controller('db')
export class DbController {
  constructor(private dbService : DbService){}
  @Get()
  root(@Res() res: Response) {
    // this.dbService.getData()
    res.send(fs.readFileSync('src/db/data.json', 'utf-8'))
  }
}

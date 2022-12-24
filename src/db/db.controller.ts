import { Get, Controller, Res } from '@nestjs/common';
import { DbService } from './db.service';
import { Response } from 'express'

@Controller('db')
export class DbController {
  constructor(private dbService : DbService){}
  @Get()
  root(@Res() res: Response) {
    res.send(this.dbService.getData())
  }
}

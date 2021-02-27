import { Book } from 'libs/domain/src/lib/Entities/Book.entity';
import { ApplicationService } from './../../../../libs/apllication/src/lib/application.service';
import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common'

import { AppService } from './app.service'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService ,private readonly appLayerService: ApplicationService) {}

  @Get()
  getData() {
    return this.appLayerService.getAllBook()
  }


  @Get('/:id')
  getById(@Param('id') id:number) {
    return this.appLayerService.getBookById(id)
  }

  @Post()
  add( @Body() book:Book) {
    return this.appLayerService.addBook(book)
  }

  @Put('/:id')
  edit(@Param('id') id:number , @Body() book:Book) {
    return this.appLayerService.editBook(book,id)
  }



}

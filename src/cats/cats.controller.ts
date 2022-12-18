import { Controller, Get, Post, Put, Patch, Delete, UseFilters, HttpException, ParseIntPipe, Param, UseInterceptors } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/common/exceptions/http-exception.filter';
import { SuccessInterceptor } from 'src/common/interceptors/success.interceptors';
import { CatsService } from './cats.service';

@Controller('cats')
@UseInterceptors(SuccessInterceptor)
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  // cats/
  @Get()
  getAllCat() {
    // throw new HttpException('api broken', 401);
    return {cats: 'get all cat api'};
  }

  // cats/:id
  @Get(':id')
  getOneCat(@Param('id', ParseIntPipe) param) {
    // console.log(param);
    // console.log(typeof param);
    return 'one cat';
  }

  @Post()
  createCat() {
    return 'create cat';
  }

  @Put(':id')
  updateCat() {
    return 'update cat';
  }

  @Patch(':id')
  updatePartialCat() {
    return;
  }

  @Delete()
  deleteCat() {
    return 'delete service';
  }
}

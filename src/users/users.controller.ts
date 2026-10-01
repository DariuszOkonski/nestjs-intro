import {
  Controller,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Param,
  Query,
  Body,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  // @Get('/{:id}')
  @Get(':id{/:optional}')
  public getUsers(@Param() params: any, @Query() query: any) {
    console.log('GET request');
    console.log('params: ', params);
    console.log('query: ', query);

    return 'You sent a GET request to users endpoint';
  }

  @Post()
  public createUsers(@Body() request: any) {
    // public createUsers(@Req() request: Request) {
    console.log('POST request');
    console.log(request);

    return 'You sent a POST request to users endpont';
  }
}

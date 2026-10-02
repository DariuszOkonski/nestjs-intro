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
  Headers,
  Ip,
  ParseIntPipe,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('users')
export class UsersController {
  @Get('{/:id}')
  // @Get(':id{/:optional}')
  // public getUsers(@Param() params: any, @Query() query: any) {
  public getUsers(
    @Param('id', ParseIntPipe) id: string | undefined,
    @Query('limit') limit: string,
  ) {
    console.log('GET request');
    console.log('params id: ', id);
    console.log('query limit: ', limit);

    return 'You sent a GET request to users endpoint';
  }

  @Post()
  public createUsers(
    @Body() request: any,
    @Headers() headers: any,
    @Ip() ip: any,
  ) {
    // public createUsers(@Body('email') email: any) {
    // public createUsers(@Req() request: Request) {
    console.log('POST request');
    console.log('request: ', request);
    console.log('headers: ', headers);
    console.log('ip: ', ip);

    return 'You sent a POST request to users endpont';
  }
}

import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  @Get('{/:id}')
  // @Get(':id{/:optional}')
  // public getUsers(@Param() params: any, @Query() query: any) {
  public getUsers(
    @Param('id', ParseIntPipe) id: number | undefined,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log('GET request');
    console.log('params id: ', id);
    console.log('query limit: ', limit);
    console.log('query page: ', page);

    return 'You sent a GET request to users endpoint';
  }

  @Post()
  public createUsers(@Body(new ValidationPipe()) createUserDto: CreateUserDto) {
    console.log('POST request');
    console.log('createUserDto: ', createUserDto);

    return 'You sent a POST request to users endpont';
  }
}

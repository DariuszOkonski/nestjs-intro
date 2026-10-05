import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamsDto } from './dtos/get-users-param.dto';

@Controller('users')
export class UsersController {
  @Get('{/:id}')
  // @Get(':id{/:optional}')
  // public getUsers(@Param() params: any, @Query() query: any) {
  public getUsers(
    @Param() getUserParamDto: GetUsersParamsDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number,
  ) {
    console.log('=== GET request ===');
    console.log('params id: ', getUserParamDto);
    console.log('query limit: ', limit);
    console.log('query page: ', page);
    console.log('===================');

    return 'You sent a GET request to users endpoint';
  }

  @Post()
  public createUsers(@Body() createUserDto: CreateUserDto) {
    console.log('createUserDto: ', createUserDto);

    return 'You sent a POST request to users endpoint';
  }

  @Patch()
  public patchUser(@Body() body: any) {
    console.log('body: ' + body);

    return 'You sent a PATCH request to users endpoint';
  }
}

import { Injectable } from '@nestjs/common';
import { GetUsersParamsDto } from '../dtos/get-users-param.dto';

@Injectable()
export class UsersService {
  public findAll(
    getUserParamDto: GetUsersParamsDto,
    limit: number,
    page: number,
  ) {
    console.log('=== GET request in UsersService ===');
    console.log('params id: ', getUserParamDto);
    console.log('query limit: ', limit);
    console.log('query page: ', page);
    console.log('===================');

    return [
      { firstName: 'John', email: 'john@doe.com' },
      { firstName: 'Alice', email: 'alice@doe.com' },
    ];
  }
}

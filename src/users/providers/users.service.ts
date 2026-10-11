import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { GetUsersParamsDto } from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @Inject(forwardRef(() => AuthService))
    private readonly authService: AuthService,
  ) {}

  public findAll(
    getUserParamDto: GetUsersParamsDto,
    limit: number,
    page: number,
  ) {
    const isAuth = this.authService.isAuth();

    console.log('isAuth: ', isAuth);

    return [
      { firstName: 'John', email: 'john@doe.com' },
      { firstName: 'Alice', email: 'alice@doe.com' },
    ];
  }

  public findOneById(id: string) {
    return { id, firstName: 'John', email: 'john@doe.com' };
  }
}

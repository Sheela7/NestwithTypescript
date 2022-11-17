import { Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UserController {
  userService: any;
  constructor(userservice: UsersService) {}

  @Get()
  getUsers() {
    return 'Hello';
  }
  @Post()
  insertUser() {
    this.userService.insertUser();
  }
}

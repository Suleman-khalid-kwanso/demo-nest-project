import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @UseGuards(new AuthGuard())
  @Get()
  async fetchUsers() {
    let users = await this.userService.getAllUsers();
    return users;
  }

  @Post()
  async loginUser() {
    let user = await this.userService.logged();
  }
}

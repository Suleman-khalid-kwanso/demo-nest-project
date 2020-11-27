import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/auth/auth.guard';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(new AuthGuard())
  fetchUsers(): UserDto[] {
    let users = this.userService.getAllUsers();
    return users;
  }

  @Post()
  async signUp(@Body() user: UserDto) {
    let person = await this.userService.createUser(user);
    return person;
  }

  @Post('login')
  loginUser(@Body() user: UserDto): string {
    this.userService.logged(user);
    return 'User Successfully Login !';
  }
}

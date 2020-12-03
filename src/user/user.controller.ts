import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { UserDto } from './dto/user.dto';
import {
  CreateUserDto,
  LoginValidate,
  UserInputDto,
} from './dto/user.input.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  @UseGuards(new AuthGuard())
  fetchUsers(): Promise<UserDto[]> {
    return this.userService.getAllUsers();
  }

  //how to resolve this type of promise
  @Get(':firstName')
  findUser(@Param('firstName') firstName: string): Promise<UserDto> {
    return this.userService.findOne(firstName);
  }

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  async signUp(@Body() user: CreateUserDto) {
    return await this.userService.createUser(user);
  }

  @Post('login')
  @UsePipes(new ValidationPipe({ transform: true }))
  loginUser(@Body() loginInfo: LoginValidate): Promise<string> {
    const { email, password } = loginInfo;
    const res = this.userService.logged({ email, password });
    return res;
  }

  //need make this function promise base?
  @Delete(':id/delete')
  async deleteUser(@Param('id') id: number): Promise<string> {
    return await this.userService.deleteUser(Number(id));
  }

  @Patch(':id/update')
  updateUser(@Body() userInput: UserInputDto, @Param('id') id: number) {
    return this.userService.updateUserInfo({
      userId: Number(id),
      data: userInput,
    });
  }
}

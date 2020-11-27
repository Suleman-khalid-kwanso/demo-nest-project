import { Injectable } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

export type UsersArr = Array<Object>;

@Injectable()
export class UserService {
  constructor(private authService: AuthService) {}

  private readonly users: UserDto[] = [
    {
      userId: 1,
      firstName: 'john',
      lastName: 'changeme',
      email: 'example@mail.com',
      password: '1234',
    },
    {
      userId: 1,
      firstName: 'william',
      lastName: 'bit',
      email: 'example@mail.com',
      password: '1234',
    },
  ];

  async findOne(firstName: string): Promise<Object> {
    return this.users.find((user) => user.firstName === firstName);
  }

  getAllUsers(): UserDto[] {
    return this.users;
  }

  async logged(loginDetails: {
    email: string;
    password: string;
  }): Promise<string> {
    const hash = await bcrypt.hash(loginDetails.password, 10);
    const login: {} = this.users.find(
      (user) => user.email === loginDetails.email && user.password === hash,
    );

    if (Object.keys(login).length) {
      return 'Successfully login';
    }
    return 'Email or Password not match!';
  }

  async createUser(user): Promise<any> {
    const hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    this.users.push(user);
    const { password, lastName, ...result } = user;
    const token = this.authService.generateJWT(result);
    return token;
  }
}

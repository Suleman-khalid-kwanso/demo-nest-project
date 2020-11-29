import { Injectable } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';

export type UsersArr = Array<Object>;

@Injectable()
export class UserService {
  constructor(private authService: AuthService) { }

  private readonly users: UserDto[] = [
    {
      userId: 1,
      firstName: 'john',
      lastName: 'changeme',
      email: 'example@mail1.com',
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

    const login: UserDto = this.users.find(
      (user) => user.email === loginDetails.email,
    );
    const isMatch: Boolean = await bcrypt.compare(loginDetails.password, login.password);
    if (isMatch) {
      return 'Successfully login';
    }
    return 'Email or Password not match!';
  }

  async createUser(payload): Promise<any> {

    const login = this.users.find(
      (user) => user.email === payload.email
    );
    if (!login) {
      const hash = await bcrypt.hash(payload.password, 10);
      payload.password = hash;
      this.users.push(payload);
      const { password, lastName, ...result } = payload;
      const token = this.authService.generateJWT(result);
      return token;
    }
    return 'Email already exist !'

  }
}

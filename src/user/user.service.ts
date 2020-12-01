import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { getConnection, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserInputDto } from './dto/user.input.dto';
import { AuthService } from '../auth/auth.service';

export type UsersArr = Array<Object>;

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: Repository<UserEntity>,
    private authService: AuthService,
  ) {}

  async findOne(firstName: string): Promise<UserDto> {
    return await this.userRepository.findOne({
      where: { firstName },
    });
  }

  async getAllUsers(): Promise<UserDto[]> {
    return await this.userRepository.find();
  }

  async logged(loginDetails: {
    email: string;
    password: string;
  }): Promise<string> {
    try {
      const login = await this.userRepository.findOne({
        where: { email: loginDetails.email },
      });
      const isMatch: Boolean = await bcrypt.compare(
        loginDetails.password,
        login.password,
      );
      if (isMatch) {
        return 'Successfully login';
      }
      throw new HttpException(
        'Email or password not match !',
        HttpStatus.FORBIDDEN,
      );
    } catch (error) {
      console.log(error);
    }
  }

  //need to about token or promise return type in this case?
  async createUser(payload: UserDto): Promise<any> {
    try {
      const login = await this.userRepository.findOne({
        where: { email: payload.email },
      });
      if (!login) {
        const hash = await bcrypt.hash(payload.password, 10);
        payload.password = hash;
        const user = await getConnection()
          .createQueryBuilder()
          .insert()
          .into(UserEntity)
          .values(payload)
          .execute();
        payload['userId'] = user.raw[0].userId;
        const { password, lastName, ...result } = payload;
        const token = this.authService.generateJWT(result);
        return token;
      }
      return 'Email already exist !';
    } catch (error) {
      console.log(error);
      throw new HttpException(error, HttpStatus.NOT_ACCEPTABLE);
    }
  }

  async deleteUser(userId: number): Promise<string> {
    try {
      await getConnection()
        .createQueryBuilder()
        .delete()
        .from(UserEntity)
        .where('userId = :userId', { userId })
        .execute();
      return 'Successfully deleted !';
    } catch (error) {}
  }

  async updateUserInfo(payload: {
    userId: number;
    data: UserInputDto;
  }): Promise<string> {
    try {
      await getConnection()
        .createQueryBuilder()
        .update(UserEntity)
        .set(payload.data)
        .where('userId = :userId', { userId: payload.userId })
        .execute();
      return 'Successfully updated !';
    } catch (error) {
      console.log(error);
    }
  }
}

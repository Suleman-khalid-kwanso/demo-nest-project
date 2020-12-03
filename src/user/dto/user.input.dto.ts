import { IsEmail, IsNotEmpty } from 'class-validator';
import { Photo } from '../../photo/photo.entity';
import { UserEntity } from '../user.entity';

export class CreateUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;

  @IsNotEmpty()
  firstName: string;

  @IsNotEmpty()
  lastName: string;
}

export class LoginValidate {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class UserInputDto {
  firstName?: string;
  lastName?: string;
  email: string;
  password?: string;
  photo?: Photo;
}

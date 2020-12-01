import { IsEmail, IsInt, IsNotEmpty } from 'class-validator';
import { createIncrementalCompilerHost } from 'typescript';

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

export class UserInputDto {
  firstName?: string;
  lastName?: string;
  email: string;
  password?: string;
}

import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';

// const mockRepository = [
//   {
//     userId: 3,
//     firstName: 'testing',
//     lastName: 'testing testing',
//     email: 'testing@mail.com',
//     password: '1234',
//   },
//   {
//     userId: 3,
//     firstName: 'testing',
//     lastName: 'testing testing',
//     email: 'testing@mail.com',
//     password: '1234',
//   },
// ];

@Module({
  imports: [AuthModule, TypeOrmModule.forFeature([UserEntity])],
  providers: [
    UserService,

    //this code is for mock testing
    // {
    //   provide: getRepositoryToken(UserEntity),
    //   useValue: mockRepository,
    // },
  ],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

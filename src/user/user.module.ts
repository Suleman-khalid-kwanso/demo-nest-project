import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { AuthModule } from 'src/auth/auth.module';
import { DatabaseModule } from 'src/dbConnection/database.module';
import { userProvider } from './user.provider';

@Module({
  imports: [AuthModule, DatabaseModule],
  providers: [...userProvider, UserService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}

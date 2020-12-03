import {
  Inject,
  Injectable,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { GlobalModule } from './global/global.module';
import { UserModule } from './user/user.module';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { PhotoModule } from './photo/photo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import configuration from './config/configuration';

@Module({
  imports: [
    BooksModule,
    GlobalModule,
    UserModule,
    AuthModule,
    CompanyModule,
    PhotoModule,
    TypeOrmModule.forRootAsync({
      useFactory: () => ({ ...configuration, autoLoadEntities: true }),
    }),
  ],
  controllers: [AppController],
  exports: [GlobalModule],
})
export class AppModule {}

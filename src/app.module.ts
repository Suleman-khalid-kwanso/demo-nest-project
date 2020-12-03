import {
  Inject,
  Injectable,
  MiddlewareConsumer,
  Module,
  NestModule,
} from '@nestjs/common';
import { BooksModule } from './books/books.module';
import { authMiddleware } from './middlewares/authMiddleware';
import { testMiddleware } from './middlewares/testMiddleware';
import { TodoController } from './todo/todo.controller';
import { TodoModule } from './todo/todo.module';
import { CommonModule } from './common/common.module';
import { GlobalModule } from './global/global.module';
import { UserModule } from './user/user.module';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
// import { PhotoModule } from './photo/photo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyModule } from './company/company.module';
import configuration from './config/configuration';

@Module({
  imports: [
    BooksModule,
    TodoModule,
    CommonModule,
    GlobalModule,
    UserModule,
    AuthModule,
    CompanyModule,
    // PhotoModule,

    // ConfigModule.forRoot({
    //   load: [configuration],
    //   isGlobal: true,
    // }),

    // TypeOrmModule.forRootAsync({
    //   useClass: TypeOrmConfigService,
    // }),

    // TypeOrmModule.forRoot({ ...configuration }),

    TypeOrmModule.forRootAsync({
      useFactory: () => ({ ...configuration }),
    }),
  ],
  providers: [AppService, AuthService],
  controllers: [AppController],
  exports: [GlobalModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(authMiddleware, testMiddleware).forRoutes(TodoController);
  }
}

import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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

@Module({
  imports: [BooksModule, TodoModule, CommonModule, GlobalModule, UserModule],
  providers: [AppService],
  controllers: [AppController],
  exports: [GlobalModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(authMiddleware, testMiddleware).forRoutes(TodoController);
  }
}

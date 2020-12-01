import { Module } from '@nestjs/common';
import { CommonModule } from '../common/common.module';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';

@Module({
  imports: [CommonModule],
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule {}

import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async getTodoList() {
    const books = await this.todoService.getTodoList();
    return books;
  }

  @Get('shared')
  getCommonValue() {
    return this.todoService.sharedModule();
  }

  @Post(':id')
  createCommons(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    docId: number,
  ) {
    return this.todoService.handleCreate(docId);
  }
}

import { Injectable } from '@nestjs/common';
import { CommonService } from 'src/common/common.service';
import { TODO } from 'src/mocks/todo.mock';

@Injectable()
export class TodoService {
  constructor(private commonService: CommonService) {}

  todoList = TODO;

  getTodoList(): Promise<any> {
    return new Promise((resolve) => {
      resolve(this.todoList);
    });
  }

  sharedModule() {
    return this.commonService.handleShared();
  }

  handleCreate(id: number) {
    return `Document ${id} is created successfully !`;
  }
}

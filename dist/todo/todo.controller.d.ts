import { TodoService } from './todo.service';
export declare class TodoController {
    private todoService;
    constructor(todoService: TodoService);
    getTodoList(): Promise<any>;
    getCommonValue(): string;
    createCommons(docId: number): string;
}

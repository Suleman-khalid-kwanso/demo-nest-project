import { CommonService } from 'src/common/common.service';
export declare class TodoService {
    private commonService;
    constructor(commonService: CommonService);
    todoList: {
        id: number;
        name: string;
        description: string;
    }[];
    getTodoList(): Promise<any>;
    sharedModule(): string;
    handleCreate(id: number): string;
}

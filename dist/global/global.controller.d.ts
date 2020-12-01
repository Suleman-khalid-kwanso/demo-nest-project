import { GlobalService } from './global.service';
export declare class GlobalController {
    private readonly globalService;
    constructor(globalService: GlobalService);
    setGlobal(): string;
}

import { CommonService } from './common.service';
export declare class CommonController {
    private commonService;
    constructor(commonService: CommonService);
    getShared(): string;
}

import { Controller, Get } from '@nestjs/common';
import { CommonService } from './common.service';

@Controller('common')
export class CommonController {
  constructor(private commonService: CommonService) {}

  @Get()
  getShared() {
    console.log('its shared successfully!');
    return this.commonService.handleShared();
  }
}

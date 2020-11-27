import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  handleShared(): string {
    return 'Document shared successfully !';
  }
}

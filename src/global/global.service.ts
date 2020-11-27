import { Injectable } from '@nestjs/common';

@Injectable()
export class GlobalService {
  globalValue(): string {
    return 'Hey its Global !';
  }
}

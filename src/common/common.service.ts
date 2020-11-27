import { Injectable } from '@nestjs/common';

export type User = Array<Object>;

@Injectable()
export class CommonService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<object> {
    return this.users.find((user) => user.username === username);
  }

  async getUsers(): Promise<User> {
    return this.users;
  }

  handleShared(): string {
    return 'Document shared successfully !';
  }
}

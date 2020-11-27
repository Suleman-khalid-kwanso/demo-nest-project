import { Injectable } from '@nestjs/common';

export type User = Array<Object>;

@Injectable()
export class UserService {
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

  async findOne(username: string): Promise<Object> {
    return this.users.find((user) => user.username === username);
  }

  getAllUsers(): Array<Object> {
    return this.users;
  }

  logged() {
    return 'user login successfully !';
  }
}

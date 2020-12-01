import { Module } from '@nestjs/common';
import { databaseProviders } from './dbConfig';

@Module({
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class DatabaseModule {}

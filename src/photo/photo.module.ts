import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';
import { PhotoService } from './photo.service';
import { PhotoController } from './photo.controller';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { PhotoQlDto } from './dto/photoQlDto';
import { PhotoResolver } from './photo.resolver';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([Photo])],
      resolvers: [{ DTOClass: PhotoQlDto, EntityClass: Photo }],
    }),
  ],
  providers: [PhotoService, PhotoResolver],
  controllers: [PhotoController],
})
export class PhotoModule {}

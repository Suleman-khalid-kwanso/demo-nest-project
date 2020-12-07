import { QueryService, InjectQueryService } from '@nestjs-query/core';
import { CRUDResolver } from '@nestjs-query/query-graphql';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { PhotoQlDto } from './dto/photoQlDto';
import { Photo } from './photo.entity';

@Resolver(() => PhotoQlDto)
export class PhotoResolver extends CRUDResolver(PhotoQlDto) {
  constructor(
    @InjectQueryService(Photo)
    readonly service: QueryService<Photo>,
  ) {
    super(service);
  }
}

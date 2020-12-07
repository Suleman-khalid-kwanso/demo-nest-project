import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType, ID, GraphQLISODateTime, Field } from '@nestjs/graphql';

@ObjectType('TodoItem')
export class PhotoQlDto {
  @FilterableField()
  name: string;

  @FilterableField()
  description: string;

  @FilterableField()
  filename: string;

  @FilterableField()
  views: number;

  @FilterableField()
  isPublished: boolean;

  @Field(() => GraphQLISODateTime)
  created!: Date;

  @Field(() => GraphQLISODateTime)
  updated!: Date;
}

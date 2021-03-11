import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class AboutMeType {
  @Field(() => ID)
  _id!: string;
  @Field(() => String)
  description!: string;
  @Field(() => String)
  language!: string;
}

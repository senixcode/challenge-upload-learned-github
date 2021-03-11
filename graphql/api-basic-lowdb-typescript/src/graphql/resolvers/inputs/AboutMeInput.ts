import { Field, ID, InputType } from "type-graphql";

@InputType()
export class AboutMeInput {
  @Field(() => ID, { nullable: true })
  _id?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  language?: string;
}

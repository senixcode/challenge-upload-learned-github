import { Field, InputType } from "@nestjs/graphql";
import { IsAlpha } from "class-validator";

@InputType()
export class createRouteInput {
    @Field()
    path:string;
    
    // @IsAlpha()
    @Field()
    title:string;
    
    // @IsAlpha()
    @Field({nullable:true})
    description?:string;
    
    // @IsAlpha()
    @Field()
    language:string;
}
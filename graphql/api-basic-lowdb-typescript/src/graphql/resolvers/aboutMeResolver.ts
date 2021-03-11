import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { AboutMeController } from "../../lowdb/controllers/aboutMeController";
import { AboutMeType } from "../types/AboutMe";
import { AboutMeInput } from "./inputs/AboutMeInput";
import { v4 as uuidv4 } from "uuid";

const aboutMeController = new AboutMeController();

@Resolver()
export class AboutMeResolver {
  @Query(() => [AboutMeType])
  getAboutme(): Array<AboutMeInput> {
    const result: Array<AboutMeInput> = aboutMeController.get();
    return result;
  }

  @Mutation(() => AboutMeType)
  async createAboutMe(
    @Arg("input") input: AboutMeInput
  ): Promise<AboutMeInput> {
    input._id = uuidv4();
    const result: AboutMeInput = await aboutMeController.create(input);
    return result;
  }

  @Mutation(() => AboutMeType)
  async updateAboutMe(
    @Arg("_id") _id: string,
    @Arg("input") input: AboutMeInput
  ): Promise<AboutMeInput> {
    const result: AboutMeInput = await aboutMeController.update(_id, input);
    return result;
  }

  @Mutation(() => AboutMeType)
  async deleteAboutMe(@Arg("_id") _id: string): Promise<AboutMeInput> {
    const result: AboutMeInput = await aboutMeController.delete(_id);
    return result;
  }
}

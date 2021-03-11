import { AboutMeInput } from "../../graphql/resolvers/inputs/AboutMeInput";
import { AboutMeType } from "../../graphql/types/AboutMe";
import { Base } from "./base";
const base = new Base();
const table: string = "aboutme";

export class AboutMeController {
  get(): Array<AboutMeType> {
    const result: Array<AboutMeType> = base.get(table);
    return result;
  }

  async create(input: AboutMeInput): Promise<AboutMeType> {
    const result: AboutMeType = await base.create<AboutMeInput>(table, input);
    return result;
  }

  async update(_id: string, input: AboutMeInput): Promise<AboutMeType> {
    const result: AboutMeType = await base.update<AboutMeInput>(table, _id, input);
    return result;
  }

  async delete(_id: string): Promise<AboutMeType> {
    const result: AboutMeType = await base.delete(table, _id);
    return result;
  }
}

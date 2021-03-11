import { DbService } from "../index";

export class Base extends DbService {
  public get(table: string): any {
    const result = this.getConnection().get(table).value();
    return result;
  }
  public async create<T>(table: string, input: T): Promise<any> {
    const result = (this.getConnection().get(table) as any).push(input).write();
    return result[0];
  }
  public async update<T>(
    table: string,
    _id: string,
    pathRecord: T
  ): Promise<any> {
    const result = (this.getConnection().get(table) as any)
      .find({ _id })
      .assign(pathRecord)
      .write();
    return result;
  }
  public async delete(table: string, _id: string): Promise<any> {
    const result = (this.getConnection().get(table) as any)
      .remove({ _id })
      .write();
    return result[0];
  }
}

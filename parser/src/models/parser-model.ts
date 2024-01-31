import { read, utils } from "xlsx";

export class ParserModel {
  static async jsonParser(file: Buffer) {
    try {
      const workbook = read(file, { type: "buffer" });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = utils.sheet_to_json(worksheet);
      return jsonData;
    } catch (e) {
      return e;
    }
  }
}

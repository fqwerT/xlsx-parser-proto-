import { TableType } from "../../interface/interface";

export const dataClone = (value:TableType) => {
  let res = [];

  if (value) {
    for (let i = 0; i < value.length; i++) {
      res[i] = [...value[i]];
    }
  }

  return res;
};

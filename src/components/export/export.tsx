import React from "react";
import { useAppSelector } from "../../store/hooks";
import { utils, writeFile } from "xlsx";
import { buttonClickCallback } from "./utills";
import * as S from './style'
interface IExport {
  reftable: React.MutableRefObject<any>;
}

export const ExportBtn: React.FC<IExport> = ({ reftable }) => {
  const name = useAppSelector((state) => state.table.name);
  return (
    <S.StyledButton
      id="export-file"
      onClick={() => buttonClickCallback(reftable, utils, writeFile, name)}
    >
      Скачать таблицу {name}
    </S.StyledButton>
  );
};

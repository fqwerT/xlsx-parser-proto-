import React, { useMemo } from "react";
import { calculateLetters } from "./utils";
import * as S from "./style";
interface TableNumericProps {
  headers: string[];
}
export const TableNumeric: React.FC<TableNumericProps> = ({ headers }) => {
  //@ts-ignore
  const alphabet = useMemo(() => {
    return calculateLetters(headers);
  }, []);
  return (
    <S.StyledNumericRow>
      {alphabet.map((item) => (
        <S.StyledNumericCell
        >
          {item}
        </S.StyledNumericCell>
      ))}
    </S.StyledNumericRow>
  );
};

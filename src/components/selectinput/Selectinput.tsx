import React,{memo} from "react";
import * as S from "../createtable/style";


interface SelectInputProps {
  changeCellValue: (
    id: string | number,
    title: string | null,
    content: string | number | null,
    isOpen: boolean
  ) => void;
  handleCellClick: (id: number | string) => void;
  item: {
    title: string | number;
    id: string | number;
    isOpen: boolean;
    content: string;
  };
}

const SelectInputMemo: React.FC<SelectInputProps> = ({
  changeCellValue,
  handleCellClick,
  item,
}) => {
    const isOpen = item.isOpen ? item.isOpen : false
  return (
    <S.StyledTableCellOptions key={item.id} $isOpen={isOpen}>
      <div style={{ display: "flex" }}>
        <S.StyledInputName
          $isOpen={isOpen}
          value={item.title}
          onChange={(e) =>
            changeCellValue(item.id, e.target.value, null, false)
          }
          onFocus={() => handleCellClick(item.id)}
        />
        <S.StyledButtonOpenTools
          onClick={() => changeCellValue(item.id, null, null, true)}
        >
          ∨
        </S.StyledButtonOpenTools>
      </div>
      <S.StyledFormulaTool $isOpen={isOpen}>
        <S.StyledInput
          placeholder="значение"
          onChange={(e) =>
            changeCellValue(item.id, null, e.target.value, false)
          }
          onFocus={() => handleCellClick(item.id)}
        />
        <p>Значение ячейки в столбце ,можно указать формулу</p>
      </S.StyledFormulaTool>
    </S.StyledTableCellOptions>
  );
}

export const SelectInput = memo(SelectInputMemo)